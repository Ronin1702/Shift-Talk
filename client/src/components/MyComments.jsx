import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";

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
            <h1>Hello, {user.username}</h1>
            <div>
                <p>My Comments:</p>
                <ul>
                    {user.comments?.map((comment) => (
                        <li key={comment._id} className='card' style={{width: "80vw", padding: "20px", marginBottom:"30px"}}>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p>
                            <p>{comment.createdAt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyComments;