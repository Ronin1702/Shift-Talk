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

    try {
      await updateMe({
        variables: { ...formState },
      });
      setShowForm(false);
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
          <Button type='submit'> Confirm 🈸 </Button>
        </Form>
      )}
    </div>
  );
};

export default UpdateProfile;
