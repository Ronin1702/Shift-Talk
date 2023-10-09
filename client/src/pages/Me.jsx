import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div>
            <h1>Hello, {user.username}</h1>
            <div>
                <p>My complaint:</p>
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
    );
};

export default Me;