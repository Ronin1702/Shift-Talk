import React from 'react';
import MyComplaints from '../components/MyComplaints';
import MyComments from '../components/MyComments';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import UpdateProfile from '../components/UpdateMe';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import spinner from '../assets/spinner.gif';

const Me = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const { loading, data } = useQuery(GET_ME, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const user = data?.me || {};

  if (loading)
    return (
      <Container fluid className='pt-4 text-center'>
        <img src={spinner}></img>
      </Container>
    );

  return (
    <Container className='my-2'>
      <div className='row mt-3 text-start fs-6'>
        <Link className='text-white' to='/OrderHistory'>
          {' '}
          🏁 View Orders{' '}
        </Link>
      </div>

      <h1 className='text-center'>
        Hello <span>{user.username}</span>
      </h1>

      <UpdateProfile userData={user} />

      <Row className='mt-3'>
        <Col xs={12} lg={6}>
          <MyComplaints />
        </Col>
        <Col xs={12} lg={6}>
          <MyComments />
        </Col>
      </Row>
    </Container>
  );
};

export default Me;
