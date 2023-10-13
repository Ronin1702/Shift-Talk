import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import RemoveComplaintButton from '../components/removeComplaint';
import UpdateProfile from '../components/UpdateMe';
import '../styles/Home.css';

const MyComplaint = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return <div>The token did not log right in Me page</div>;
  }
  const { data, error, loading } = useQuery(GET_ME, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const user = data?.me || {};
  console.log('returned my info', user);
  console.log('check what I have', data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className='text-center'>
        Hello <span>{user.username}</span>
      </h1>
      <div>
        <UpdateProfile userData={user} />
        <br />
        <p className='text-center'>My Complaints:</p>
        <div className='d-flex justify-content-center align-items-stretch'>
          <ul type="none" className='card w-75'>
            {user.complaints.map((complaint) => (
              <li key={complaint._id} className='singleComplaint shadow text-center'>
                <div></div>
                <p className='text-secondary'>
                  Make:{' '}
                  <span className='text-warning'>{complaint.car.make}</span>{' '}
                  Model:{' '}
                  <span className='text-warning'>{complaint.car.model}</span>{' '}
                  Year:{' '}
                  <span className='text-warning'>{complaint.car.year}</span>
                </p>
                <div className='d-flex justify-content-center'>
                  {' '}
                  <p className='commText'>{complaint.text}</p>
                  <p className='dateText'>{complaint.createdAt}</p>
                </div>

                <RemoveComplaintButton complaintId={complaint._id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyComplaint;
