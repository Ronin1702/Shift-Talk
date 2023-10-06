import React, { useState } from 'react';

const styles = {
    jumbotron: {
        backgroundColor: "white",
        marginTop: 50,
        marginBottom: "70vh"
    },
    form: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the make, model, and year values

    }

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
                    <button type="submit">Search</button>
                </form>

                <div className="complaints-container">
                    {/* Map over complaints and render a ComplaintCard for each one */}
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
