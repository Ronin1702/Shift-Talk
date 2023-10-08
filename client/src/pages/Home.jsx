import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../utils/queries';
import Comments from '../components/Comments';
import { InputGroup } from 'react-bootstrap';
import '../styles/Home.css';


const Home = () => {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [refetchedData, setRefetchedData] = useState(null);
    const [expandedComplaintId, setExpandedComplaintId] = useState(null);

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

    const handleToggleComments = (complaintId) => {
        if (expandedComplaintId === complaintId) {
            setExpandedComplaintId(null);
        } else {
            setExpandedComplaintId(complaintId);
        }
    };

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

                <form onSubmit={handleSubmit} className='form'>
                <h1 className="text-center">
                    Enter the Make, Model, and Year of Vehicle!
                </h1>
                    <input type="text" placeholder="Make" value={make} onChange={(event) => setMake(event.target.value)} className="input" />
                    <input type="text" placeholder="Model" value={model} onChange={(event) => setModel(event.target.value)}  />
                    <input type="text" placeholder="Year" value={year} onChange={(event) => setYear(event.target.value)}  />
                    {/* when the search is loading, it's fetching data, so we disable this button at this time*/}
                    <button type="submit" disabled={loading}>Search</button>
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
                        <div className='singleComplaint shadow' key={complaint._id}>
                            <p>{complaint.author} wrote: {complaint.text}</p>
                            {expandedComplaintId === complaint._id && (
                                <div>
                                    <Comments complaintId={complaint._id} />
                                </div>
                            )}
                            <button onClick={() => handleToggleComments(complaint._id)}> Reply </button>
                        </div>
                    ))}
                </div>
            </form>
            </div>
    );
};

export default Home;