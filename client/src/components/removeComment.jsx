import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../utils/mutations';
import AuthService from '../utils/auth';
import { Button } from 'react-bootstrap';
import { GET_ME } from '../utils/queries';
import React from 'react';
import ConfirmModal from './ConfirmModal';

const RemoveCommentButton = ({ commentId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  console.log('commentId:', commentId);

  const [RemoveComment] = useMutation(REMOVE_COMMENT, {
    fetchPolicy: 'no-cache',
    refetchQueries: [{ query: GET_ME }],
  });
  const handleDeleteComment = async (commentId) => {
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      await RemoveComment({
        variables: { commentId: commentId },
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
        onConfirm={() => handleDeleteComment(commentId)}
      />
    </div>
  );
};

export default RemoveCommentButton;
