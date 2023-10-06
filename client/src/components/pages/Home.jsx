import React from 'react';


const styles = {
    jumbotron: {
        backgroundColor: "white",
        marginTop: 150,
        marginBottom: 100
    }
};


const Resume = () => (
    <div className="container-sm container-md container-lg container-xl">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            <h1 className="display-4 text-center">
                Home
            </h1>
        </div>
    </div>
);

export default Resume;