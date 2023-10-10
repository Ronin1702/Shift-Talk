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
      <h1>Hello, {user.username}</h1>
      <div>
        <UpdateProfile userId={user._id} />
        <p>My complaint:</p>
        <ul>
          {user.complaints.map((complaint) => (
            <li key={complaint._id}>
              <p>
                {complaint.car.make},{complaint.car.model},{complaint.car.year}
              </p>
              <p>{complaint.text}</p>
              <p>{complaint.createdAt}</p>
              <RemoveComplaintButton complaintId={complaint._id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Me;
