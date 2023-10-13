import React from 'react';
import MyComplaints from "../components/MyComplaints";
import MyComments from '../components/MyComments';
import OrderHistory from './OrderHistory';
import { Link } from 'react-router-dom';

const Me = () => {

return (
  <container>
    <div>
      <Link to='/orderhistory'> View Orders </Link>
    </div>
    <div>
      <MyComplaints />
    </div>
    <div>
      <MyComments />
    </div>
  </container>
);
};

export default Me;
