import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ME } from '../utils/mutations';
import AuthService from '../utils/auth';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { GET_ME } from '../utils/queries';

const UpdateProfile = () => {
  //userId check OK

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

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

    try {
      await updateMe({
        variables: { ...formState },
      });
    } catch (err) {
      console.error(err);
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
      <h4>Update Profile</h4>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Form.Label htmlFor='username'>Username:</Form.Label>
          <Form.Control
            type='text'
            name='username'
            id='username'
            value={formState.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control
            type='password'
            name='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type='submit'>Update</Button>
      </Form>
    </div>
  );
};

export default UpdateProfile;
