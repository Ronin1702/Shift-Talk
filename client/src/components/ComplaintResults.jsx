import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../utils/queries';
import Comments from '../components/Comments';
import AddComplaint from '../components/addComplaint';
import AddComment from '../components/addComment';
import '../styles/Home.css';

const ComplaintResults = ({ carData }) => {
  console.log('carData: ', carData);
  if (!carData) {
    return (
      <div>
        <p>Error: No car details provided.</p>
        <p>
          Please go back and provide the Make, Model, and Year of the vehicle.
        </p>
      </div>
    );
  }
  const { make, model, year } = carData;
  const [expandedComplaintId, setExpandedComplaintId] = useState(null);

  const { loading, error, data } = useQuery(GET_CAR, {
    variables: { make, model, year },
    skip: !!carData, // skip the query if carData is available
  });

  const handleToggleComments = (complaintId) => {
    if (expandedComplaintId === complaintId) {
      setExpandedComplaintId(null);
    } else {
      setExpandedComplaintId(complaintId);
    }
  };

  const carInfo = carData || (data && data.car);
  // console.log("carInfo: ", carInfo);
  // console.log("carInfo.complaints: ", carInfo.complaints);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='complaints-container'>
      <AddComplaint refetchCarData={() => {}} />
      {carInfo &&
        carInfo.complaints.map((complaint) => (
          <div className='singleComplaint shadow' key={complaint._id}>
            <p>
              {complaint.author} wrote: {complaint.text}
            </p>
            <p>Date: {complaint.createdAt}</p>
            {console.log('complaint: ', complaint.createdAt)}
            {expandedComplaintId === complaint._id && (
              <div>
                <Comments complaintId={complaint._id} />
              </div>
            )}
            <button onClick={() => handleToggleComments(complaint._id)}>
              View Comments
            </button>
            <AddComment complaintId={complaint._id} />
          </div>
        ))}
    </div>
  );
};

export default ComplaintResults;
