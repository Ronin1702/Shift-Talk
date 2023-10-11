import { useMutation } from '@apollo/client';
import { REMOVE_COMPLAINT } from '../utils/mutations';
import AuthService from '../utils/auth';
import { Button } from 'react-bootstrap';
import { GET_ME } from '../utils/queries';
import React from 'react';
import ConfirmModal from './ConfirmModal';

const RemoveComplaintButton = ({ complaintId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  console.log('complaintId:', complaintId);

  const [RemoveComplaint] = useMutation(REMOVE_COMPLAINT, {
    fetchPolicy: 'no-cache',
    refetchQueries: [{ query: GET_ME }],
  });
  const handleDeleteComplaint = async (complaintId) => {
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      await RemoveComplaint({
        variables: { complaintId: complaintId },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      setModalShow(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button
        variant='primary'
        className='btn-block btn-danger bg-gradient'
        onClick={() => setModalShow(true)}
      >
         🗑️
      </Button>

      <ConfirmModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={() => handleDeleteComplaint(complaintId)}
      />
    </div>
  );
};

export default RemoveComplaintButton;
