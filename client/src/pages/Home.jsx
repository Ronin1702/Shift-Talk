import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../utils/queries';

const styles = {
    jumbotron: {
        backgroundColor: "white",
        marginTop: 150,
        marginBottom: 100
    },
    form: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    input: {
        marginRight: 10
    }
};

const Home = () => {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [refetchedData, setRefetchedData] = useState(null);

    // Any whitespace in the make or model should be removed and the string should be converted to lowercase
    // so that we can manage the data more easily
    const trimmedMake = make.replace(/\s/g, '').toLowerCase();
    const trimmedModel = model.replace(/\s/g, '').toLowerCase();
    // convert year to a number and trim any whitespace
    const numericYear = parseInt(year.trim(), 10);

    const { loading, error, data, refetch } = useQuery(GET_CAR, {
        variables: { make: trimmedMake, model: trimmedModel, year: numericYear },
        skip: true,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        // check if the make, model, and year are valid
        const validMake = /^[a-z]+$/.test(trimmedMake);
        if (!validMake) {
            setErrorMessage('You can only have letters in Make field');
            return;
        }

        const validModel = /^[a-z0-9]+$/.test(trimmedModel);
        if (!validModel) {
            setErrorMessage('You can only have letters and numbers in Model field');
            return;
        }

        const validYear = /^[0-9]+$/.test(numericYear);
        if (!validYear) {
            setErrorMessage('You can only have numbers in Year field');
            return;
        }

        try {
            // make sure we clear any error messages before making the request
            setErrorMessage(null);
            // make sure we clear any data before making the request
            setRefetchedData(null);

            const { data: refetchedData } = await refetch({ make: trimmedMake, model: trimmedModel, year: numericYear });
            console.log(refetchedData);

            setRefetchedData(refetchedData);
            if (refetchedData && refetchedData.car) {
                const car = refetchedData.car;
                console.log(car);

                if (car.complaints) {
                    const complaints = car.complaints;
                    console.log(complaints);
                } else {
                    console.log("No complaints found for this car.");
                }
            } else {
                console.log("No data found for this car.");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container-sm container-md container-lg container-xl">
            <div className="jumbotron shadow" style={styles.jumbotron}>
                <h1 className="display-4 text-center">
                    Home
                </h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input type="text" placeholder="Make" value={make} onChange={(event) => setMake(event.target.value)} style={styles.input} />
                    <input type="text" placeholder="Model" value={model} onChange={(event) => setModel(event.target.value)} style={styles.input} />
                    <input type="text" placeholder="Year" value={year} onChange={(event) => setYear(event.target.value)} style={styles.input} />
                    {/* when the search is loading, it's fetching data, so we disable this button at this time*/}
                    <button type="submit" disabled={loading}>Search</button>
                </form>
                <div className="error-message">
                    {/* show errorMessage if has*/}
                    {errorMessage && (
                        <p>
                            {errorMessage}
                            <br />
                            Please try again.
                        </p>
                    )}
                </div>
                <div className="complaints-container">
                    {/* check if we have data or not, if have then map over */}
                    {refetchedData && refetchedData.car && refetchedData.car.complaints.map((complaint) => (
                        <div key={complaint._id}>
                            <p>Complaint: {complaint.text}</p>
                            <p>Author: {complaint.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
