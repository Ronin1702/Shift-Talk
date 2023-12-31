import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMPLAINT } from '../utils/mutations';
import AuthService from '../utils/auth';

const AddComplaint = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [complaintText, setComplaintText] = useState('');
  const [error, setError] = useState('');

  const [AddComplaint] = useMutation(ADD_COMPLAINT);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const carId = localStorage.getItem('carId');
    if (!carId) {
      setError('Car not selected. Please search for a car first.');
      return;
    }

    if (!AuthService.loggedIn()) {
      setError('You need to be logged in to add a complaint.');
      return;
    }

    try {
      setError('');
      const { data } = await AddComplaint({
        variables: {
          text: complaintText,
          carId: carId,
        },
      });

      if (data) {
        //Handle success
        props.refetchCarData();
        // Close the form
        setShowForm(false);
        // Clear the text
        setComplaintText('');
        // Refetch the car data to update the list of complaints
        window.location.href = '/';
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='complaint-container'>
      <button
        type='button'
        className='btn btn-outline-info btn-md'
        onClick={() => setShowForm(!showForm)}
      >
        Add Comment
      </button>

      {showForm && (
        <div className='complaint-form-container'>
          <form onSubmit={handleFormSubmit}>
            <textarea
              value={complaintText}
              onChange={(e) => setComplaintText(e.target.value)}
              placeholder='Write your comment here'
              className='form-control mb-2'
              rows='4'
            ></textarea>
            <button type='submit' className='btn btn-outline-primary'>
              Submit
            </button>
          </form>
        </div>
      )}

      {error && <p className='error mt-2'>{error}</p>}
    </div>
  );
};

export default AddComplaint;
