import React, { useState } from 'react';

const SearchSubmit = ({ handleSearch }) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(make, model, year);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Make"
                value={make}
                onChange={(event) => setMake(event.target.value)}
                style={styles.input}
            />
            <input
                type="text"
                placeholder="Model"
                value={model}
                onChange={(event) => setModel(event.target.value)}
                style={styles.input}
            />
            <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                style={styles.input}
            />
            <button type="submit">Search</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
    },
    input: {
        margin: '10px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid gray',
        width: '200px',
    },
};

export default SearchSubmit;
