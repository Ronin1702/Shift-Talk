import React from 'react';
import MyComplaints from '../components/MyComplaints';
import MyComments from '../components/MyComments';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Me = () => {
  return (
    <Container className='my-2'>
      <div className='row mt-3 text-start fs-6'>
        <Link className='text-white' to='/OrderHistory'>
          {' '}
          🏁 View Orders{' '}
        </Link>
      </div>
      <div>
        <MyComplaints />
      </div>
      <br/>
      <div>
        <MyComments />
      </div>
    </Container>
  );
};

export default Me;
