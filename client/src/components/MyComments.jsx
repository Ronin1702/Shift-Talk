import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";
import RemoveCommentButton from "./removeComment";

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
            <div>
                <p className="text-center">My Replies:</p>
                <ul className="text-center justify-content-center">
                    {user.comments?.map((comment) => (
                        <li key={comment._id} className='card text-center justify-content-center' style={{ width: "80vw", padding: "20px", marginBottom: "30px" }}>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p>
                            <p>{comment.createdAt}</p>
                            <RemoveCommentButton commentId={comment._id} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyComments;