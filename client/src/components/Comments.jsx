import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../utils/queries';

const Comments = ({ complaintId }) => {
    const { loading, error, data } = useQuery(GET_COMMENTS, {
        variables: { complaintId },
    });
    console.log("GET_COMMENTS:", data);
    if (loading) {
        return <p>Loading comments...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (data.comments.length === 0) {
        return <p>No comment under this complaint</p>;
    }

    return (
        <div>
            {data.comments.map((comment) => (
                <div key={comment._id}>
                    <p>{comment.author} wrote on {comment.createdAt}</p>
                    <p>Comment: {comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;