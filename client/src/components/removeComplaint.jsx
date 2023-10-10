import { useMutation } from '@apollo/client';
import { REMOVE_COMPLAINT } from '../utils/mutations';
import AuthService from '../utils/auth';
import { Button } from 'react-bootstrap';
import { GET_ME } from '../utils/queries'; 

const RemoveComplaintButton = ({ complaintId }) => {
  console.log('complaintId:', complaintId);
  const [RemoveComplaint] = useMutation(REMOVE_COMPLAINT,{
    fetchPolicy: 'no-cache',
    refetchQueries: [{ query: GET_ME }],
  });
  const handleDeleteComplaint = async ( complaintId ) => {
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
      // RemoveComplaintId(complaintId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button
        className='btn-block btn-danger'
        onClick={() => handleDeleteComplaint(complaintId)}
      >
        Delete this Complaint and All its Replies!
      </Button>
    </div>
  );
};

export default RemoveComplaintButton;
