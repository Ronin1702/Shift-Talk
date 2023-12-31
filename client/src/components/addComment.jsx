import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import AuthService from '../utils/auth';

const AddComment = ({ complaintId }) => {
  const [showForm, setShowForm] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState('');

  const [AddComment] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!AuthService.loggedIn()) {
      setError('You need to be logged in to reply!');
      return;
    }

    try {
      setError('');
      const { data } = await AddComment({
        variables: {
          commentText: commentText,
          complaintId: complaintId,
        },
      });

      if (data) {
        //Handle success
        // props.refetchCarData();
        // Close the form
        setShowForm(false);
        // Clear the text
        setCommentText('');
        // Refetch the car data to update the list of complaints
        window.location.href = '/';
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div xs="2">
      <button
        type='button'
        onClick={() => setShowForm(!showForm)} className='btn my-2 btn-outline-secondary btn-lg'
      >
        Reply
      </button>


      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <textarea
            className='form-control'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder='Write your Reply here'
          ></textarea>
          <button className='mt-2' type='submit'>Submit</button>
        </form>
      )}

      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default AddComment;
