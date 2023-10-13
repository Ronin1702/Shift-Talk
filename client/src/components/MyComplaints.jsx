import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import RemoveComplaintButton from '../components/removeComplaint';
import UpdateProfile from '../components/UpdateMe';

const Me = () => {
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
        <p className='text-center'>My Complaints:</p>
        <ul className='text-center list-group'>
          {user.complaints.map((complaint) => (
            <li key={complaint._id}>
              <div></div>
              <p className='text-secondary'>
                Make: <span className='text-warning'>{complaint.car.make}</span>{' '}
                Model:{' '}
                <span className='text-warning'>{complaint.car.model}</span>{' '}
                Year: <span className='text-warning'>{complaint.car.year}</span>
              </p>
              <div className='d-flex justify-content-center'>
                {' '}
                <p className='list-group-item bg-info card'>{complaint.text}</p>
                <p>{complaint.createdAt}</p>
              </div>

              <RemoveComplaintButton complaintId={complaint._id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Me;