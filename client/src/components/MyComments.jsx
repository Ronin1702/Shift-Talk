import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";
import RemoveCommentButton from "./removeComment";
import '../styles/Home.css';

const MyComments = () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        return false;
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
            <div className="results-container">
                <p>My Comments:</p>
                <ul className='singleComplaint shadow'>
                    {user.comments?.map((comment) => (
                        <li key={comment._id} className='card text-center justify-content-center' style={{ width: "80vw", padding: "20px", marginBottom: "30px" }}>
                            <p className='author'>{comment.author}</p>
                            <p className='commText'>{comment.text}</p>
                            <p className='dateText'>{comment.createdAt}</p>
                            <RemoveCommentButton commentId={comment._id} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyComments;