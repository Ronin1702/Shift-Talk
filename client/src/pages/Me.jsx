import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";
import MyComments from "../components/MyComments";


const Me = () => {
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

    const [showComments, setShowComments] = useState(false);
    const [showComplaints, setShowComplaints] = useState(false);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleCommentsClick = () => {
        setShowComments(true);
        setShowComplaints(false);
    };

    const handleComplaintsClick = () => {
        setShowComplaints(true);
        setShowComments(false);
    };

    return (
        <div>
            <button type='button' className='btn btn-primary' onClick={handleComplaintsClick}>
                My Complaints
            </button>

            <button type='button' className='btn btn-secondary' onClick={handleCommentsClick}>
                My Comments
            </button>

            {showComments && (
                <div>
                    <MyComments/>
                </div>
            )}

            {showComplaints && (
                <div>
                    <h1>Hello, {user.username}</h1>
                    <div>
                        <p>My Complaints:</p>
                        <ul>
                            {user.complaints.map((complaint) => (
                                <li key={complaint._id}>
                                    <p>{complaint.car.make},{complaint.car.model},{complaint.car.year}</p>
                                    <p>{complaint.text}</p>
                                    <p>{complaint.createdAt}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Me;
