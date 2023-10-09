import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import AuthService from '../utils/auth';

const AddComment = ({complaintId}) => {
  const [showForm, setShowForm] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState('');

  const [AddComment] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!AuthService.loggedIn()) {
      setError('You need to be logged in to add a comment.');
      return;
    }

    try {
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
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => setShowForm(!showForm)}
      >
        Add Comment
      </button>

      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder='Write your Comment here'
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      )}

      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default AddComment;
