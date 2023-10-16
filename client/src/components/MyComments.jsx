import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";
import RemoveCommentButton from "./removeComment";
import '../styles/Home.css';

const MyComments = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return <div>The token did not log right in MyComments</div>;
  }
  const { data, error, loading } = useQuery(GET_ME, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const user = data?.me || {};
  console.log("returned my info", user);
  console.log("check what I have", data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div>
      <div>
        <p className='text-center me-text'>My Replies:</p>
        <div className="d-flex justify-content-center">
          <div className='scrollable-content'>
            <ul type="none" className='card list-group'>
              {user.comments?.map((comment) => (
                <li key={comment._id} className='singleComplaint shadow text-center'>

                  <p className="complaintText">You replied to "{comment.complaint.text}" :</p>
                  <p className='commText'>"{comment.text}"</p>
                  <p className='carInfo'>on {comment.complaint.car.year} {comment.complaint.car.make} {comment.complaint.car.model}</p>
                  <p className='dateText'>{comment.createdAt}</p>
                  <RemoveCommentButton commentId={comment._id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComments;