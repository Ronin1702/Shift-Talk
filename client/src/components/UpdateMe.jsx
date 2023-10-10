import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ME } from '../utils/mutations';
import AuthService from '../utils/auth';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { GET_ME } from '../utils/queries';

const UpdateProfile = ({ userData }) => {
  //userId check OK
  console.log('userData', userData);
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    username: userData.username,
    password: '',
    currentPassword: '',
    confirmPassword: '',
  });

  const [showForm, setShowForm] = useState(false);

  const token = AuthService.loggedIn() ? AuthService.getToken() : null;
  if (!token) {
    return <div>The token did not log right in UpdateMe page</div>;
  }
  const [updateMe] = useMutation(UPDATE_ME, {
    fetchPolicy: 'no-cache',
    refetchQueries: [{ query: GET_ME }],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Check if password and confirmPassword match
    if (formState.password !== formState.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    let variablesToUpdate = {};

    if (formState.username !== userData.username) {
      variablesToUpdate.username = formState.username;
    }

    if (formState.password) {
      variablesToUpdate.password = formState.password;
    }
    console.log('variablesToUpdate', variablesToUpdate);
    try {
      await updateMe({
        variables: {
          ...variablesToUpdate,
          currentPassword: formState.currentPassword,
        },
      });
      setShowForm(false);
      setErrorMessage('');
      setFormState({
        username: formState.username,
        password: '',
        currentPassword: '',
      });
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'Failed to update profile');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
        <Button onClick={() => setShowForm(!showForm)}>
          {' '}
          Update 🏁🏁🏁 Profile{' '}
        </Button>
      </div>
      {showForm && (
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Form.Label htmlFor='username'>Enter New Username 🆔:</Form.Label>
            <Form.Control
              type='text'
              name='username'
              id='username'
              value={formState.username}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Form.Label htmlFor='currentPassword'>
              Current Password ㊙️:
            </Form.Label>
            <Form.Control
              type='password'
              name='currentPassword'
              id='currentPassword'
              value={formState.currentPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Form.Label htmlFor='password'>Enter New Password ㊙️:</Form.Label>
            <Form.Control
              type='password'
              name='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          {/* New Confirm Password Field */}
          <FormGroup>
            <Form.Label htmlFor='confirmPassword'>
              Confirm New Password ㊙️:
            </Form.Label>
            <Form.Control
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={formState.confirmPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <Button type='submit'> Confirm 🈸 </Button>
          <hr />
          <p className='d-flex justify-content-center'>Current Password NOT NEEDED for USERNAME</p>
          {errorMessage && (
            <div style={{ color: 'red' }}>{errorMessage}</div>
          )}{' '}
          {/* Display error message if present */}
        </Form>
      )}
    </div>
  );
};

export default UpdateProfile;
