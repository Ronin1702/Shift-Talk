import React from 'react';
import MyComplaints from '../components/MyComplaints';
import MyComments from '../components/MyComments';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Me = () => {
  return (
    <Container className='my-1'>
      <div className='row mt-2 text-end fs-6'>
        <Link className='text-secondary' to='/OrderHistory'>
          {' '}
          📖 View Orders{' '}
        </Link>
      </div>
      <div>
        <MyComplaints />
      </div>
      <div>
        <MyComments />
      </div>
    </Container>
  );
};

export default Me;
