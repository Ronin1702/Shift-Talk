import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import RemoveComplaintButton from '../components/removeComplaint';
import '../styles/Home.css';
import MakeLogo from './MakeLogo';

const MyComplaint = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return <div>The token did not log right in MyComplaints</div>;
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
      <p className='text-center me-text'>My Comments:</p>
      <div className='d-flex justify-content-center align-items-stretch'>
        <div className='scrollable-content'>
          <ul type="none" className='card list-group'>
            {user.complaints.map((complaint) => (
              <li key={complaint._id} className='singleComplaint shadow text-center'>
                <div className="logo">
                  <MakeLogo  carMake={complaint.car.make} />
                </div>
                <br/>
                <p className='mePage'>
                  Make:{' '}
                  <span className='mePage'>{complaint.car.make}</span>{' '}
                  <br/>
                  Model:{' '}
                  <span className='mePage'>{complaint.car.model}</span>{' '}
                  <br/>
                  Year:{' '}
                  <span className='mePage mb-1'>{complaint.car.year}</span>
                </p>
                <div className='d-flex justify-content-center'>
                  {' '}
                  <p className='commText fs-2'>{complaint.text}</p>
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
