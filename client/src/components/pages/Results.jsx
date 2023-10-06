import React, { useState, useEffect } from 'react';

function Results(props) {
    const [carData, setCarData] = useState(null);
    const [complaints, setComplaints] = useState([]);
    const [newComplaint, setNewComplaint] = useState('');

    useEffect(() => {
        // Fetch car data from API
        axios.get(`https://example.com/api/cars?make=${props.make}&model=${props.model}&year=${props.year}`)
            .then(response => {
                setCarData(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        // Fetch complaints from API
        axios.get(`https://example.com/api/complaints?make=${props.make}&model=${props.model}&year=${props.year}`)
            .then(response => {
                setComplaints(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [props.make, props.model, props.year]);

    function handleNewComplaintChange(event) {
        setNewComplaint(event.target.value);
    }

    function handleNewComplaintSubmit(event) {
        event.preventDefault();
        // Submit new complaint to API
        axios.post(`https://example.com/api/complaints`, {
            make: props.make,
            model: props.model,
            year: props.year,
            complaint: newComplaint
        })
            .then(response => {
                setComplaints([...complaints, response.data]);
                setNewComplaint('');
            })
            .catch(error => {
                console.error(error);
            });
    }

    if (!carData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{carData.make} {carData.model} {carData.year}</h2>
            <ul>
                {complaints.map(complaint => (
                    <li key={complaint.id}>{complaint.text}</li>
                ))}
            </ul>
            <form onSubmit={handleNewComplaintSubmit}>
                <label>
                    Add a complaint:
                    <input type="text" value={newComplaint} onChange={handleNewComplaintChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Results;
