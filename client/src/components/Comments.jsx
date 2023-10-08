import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../utils/queries';

const Comments = ({ complaintId }) => {
    const { loading, error, data } = useQuery(GET_COMMENTS, {
        variables: { complaintId },
    });

    if (loading) {
        return <p>Loading comments...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            {data.comments.map((comment) => (
                <div key={comment._id}>
                    <p>Comment: {comment.text}</p>
                    <p>Author: {comment.author}</p>
                    <p>Date: {comment.createdAt}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;