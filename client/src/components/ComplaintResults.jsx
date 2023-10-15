import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../utils/queries';
import Comments from '../components/Comments';
import AddComplaint from '../components/addComplaint';
import AddComment from '../components/addComment';
import '../styles/Home.css';
import MakeLogo from '../components/MakeLogo';

const ComplaintResults = ({ carData, complaintId }) => {
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
    <Container fluid>
      {carInfo && carInfo.complaints.length === 0 ? (
        <div className='noComplaints'>
        <h2> 🏁 Drive the Conversation!</h2>
        <p>It looks like no one has shared their thoughts on this car model yet.</p>
        <p><strong>Share your experience now</strong> and help others make informed decisions.</p>
        <AddComplaint refetchCarData={() => {}} />
        <small className='bonusNote'>Bonus: Being the first comes with its own bragging rights!</small>
      </div>
      
      ) : (
        carInfo.complaints.map((complaint) => (
          <div>
            <div>
              <MakeLogo carMake={carInfo.make} />
              </div>
              <div className='noComplaints' key={complaint._id}>
          <p className='author'>{complaint.author}</p>
          <p className='commText'>{complaint.text} </p>
          <p className='dateText'>on {complaint.createdAt}</p>
          {console.log('complaint: ', complaint.createdAt)}
          {expandedComplaintId === complaint._id && (
            <div>
              <Comments complaintId={complaint._id} />
            </div>
          )}
          <Col className='reply-button'>
            <button onClick={() => handleToggleComments(complaint._id)} className='btn btn-outline-info btn-lg'>
              View Replies
            </button>
            <AddComment complaintId={complaint._id}  />
          </Col>
        </div></div>
          
        ))
      )}
    </Container>
  );
};

export default ComplaintResults;
