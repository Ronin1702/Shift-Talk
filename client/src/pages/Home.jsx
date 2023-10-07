import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../utils/queries';
import '../styles/Home.css';
import backgroundImage from '../assets/images/silverback.png';


const Home = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { loading, error, data } = useQuery(GET_CAR, {
    variables: { make, model, year },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Any whitespace in the make or model should be removed and the string should be converted to lowercase
    // so that we can manage the data more easily
    const trimmedMake = make.replace(/\s/g, '').toLowerCase();
    const trimmedModel = model.replace(/\s/g, '').toLowerCase();
    // convert year to a number and trim any whitespace
    const numericYear = parseInt(year.trim(), 10);

    // check if the make, model, and year are valid
    const validMake = /^[a-z]+$/.test(trimmedMake);
    if (!validMake) {
      setErrorMessage('You can only have letters in Make field');
      return;
    }

    const validModel = /^[a-z0-9]+$/.test(trimmedModel);
    if (!validModel) {
      setErrorMessage('You can only have letters and numbers in Model field');
      return;
    }

    const validYear = /^[0-9]+$/.test(numericYear);
    if (!validYear) {
      setErrorMessage('You can only have numbers in Year field');
      return;
    }

    try {
      // make sure we clear any error messages before making the request
      setErrorMessage(null);

      const { data } = await GET_CAR({
        variables: { make: trimmedMake, model: trimmedModel, year: numericYear }
      });
      console.log(data);

      const car = data.car;
      console.log(car);

      const complaints = car.complaints;
      console.log(complaints);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container-sm container-md container-lg container-xl">
      <div >
        <h1 className="display-4 text-center">
          Home
        </h1>
        <form className='jumbotron' onSubmit={handleSubmit} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="d-flex flex-wrap ">
            <input type="text" placeholder="Make" value={make} onChange={(event) => setMake(event.target.value)} />
            <input type="text" placeholder="Model" value={model} onChange={(event) => setModel(event.target.value)} />
            <input type="text" placeholder="Year" value={year} onChange={(event) => setYear(event.target.value)} />
          </div>
          <div className="d-flex flex-column align-items-center">
            <button type="submit" disabled={loading}>Search</button>
          </div>
        </form>
        <div className="error-message">
          {/* show errorMessage if has*/}
          {errorMessage && (
            <p>
              {errorMessage}
              <br />
              Please try again.
            </p>
          )}
        </div>
        <div className="complaints-container">
          {/* check if we have data or not, if have then map over */}
          {data && data.car && data.car.complaints.map((complaint) => (
            <div key={complaint._id}>
              <p>Text: {complaint.text}</p>
              <p>Author: {complaint.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;