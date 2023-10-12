import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, Form, FormGroup,} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../utils/queries';
import ComplaintResults from '../components/ComplaintResults';
import '../styles/Home.css'
import Search from '../assets/sounds/Search.wav';

const Home = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [refetchedData, setRefetchedData] = useState(null);

  // Any whitespace in the make or model should be removed and the string should be converted to lowercase
  // so that we can manage the data more easily
  const trimmedMake = make.replace(/\s/g, '').toLowerCase();
  const trimmedModel = model.replace(/\s/g, '').toLowerCase();
  // convert year to a number and trim any whitespace
  const numericYear = parseInt(year.trim(), 10);

  const searchSfx = new Audio(Search);

  function play() {
    new Audio(Search).play();
  };

  const { loading, error, data, refetch } = useQuery(GET_CAR, {
    variables: { make: trimmedMake, model: trimmedModel, year: numericYear },
    fetchPolicy: 'network-only',
    skip: true,
  });

  // const handleToggleComments = (complaintId) => {
  //   if (expandedComplaintId === complaintId) {
  //     setExpandedComplaintId(null);
  //   } else {
  //     setExpandedComplaintId(complaintId);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      // make sure we clear any data before making the request
      setRefetchedData(null);

      const { data: refetchedData } = await refetch({
        make: trimmedMake,
        model: trimmedModel,
        year: numericYear,
      });
      console.log('refetchedData:', refetchedData);
      console.log('refetchedData.car:', refetchedData.car);

      if (refetchedData && refetchedData.car) {
        setRefetchedData(refetchedData);
        localStorage.setItem('carId', refetchedData.car._id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h1 className='text-center'>
          Enter the Make, Model, and Year of Vehicle!
        </h1>
      <Form onSubmit={handleSubmit} className='text-center pt-4' >
        
        <input
          type='text'
          placeholder='Make'
          value={make}
          onChange={(event) => setMake(event.target.value)}
          className='input'
        />
        
        <input
          type='text'
          placeholder='Model'
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
        
        <input
          type='text'
          placeholder='Year'
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <button type='submit' onClick={play}>Search</button>
        
        <div className='error-message'>
          {/* show errorMessage if has*/}
          {errorMessage && (
            <p>
              {errorMessage}
              <br />
              Please try again.
            </p>
          )}
        </div>
      </Form>
      <div className='results-container'>
        {refetchedData && refetchedData.car && (
          <ComplaintResults carData={refetchedData.car} key={Date.now()} />
        )}
      </div>
    </Container>
  );
};

export default Home;
