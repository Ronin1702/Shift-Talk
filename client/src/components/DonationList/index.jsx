import { useEffect } from 'react';
import DonationItem from '../DonationItem';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_DONATIONS } from '../../utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../utils/reducers/donationsSlice';
import { useQuery } from '@apollo/client';
import { QUERY_DONATIONS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function DonationList() {
  // const [state, dispatch] = useStoreContext();
  const donations = useSelector((state) => state.donations);
  const dispatch = useDispatch();

  // const { currentCategory } = state;
  const currentCategory = useSelector((state) => state.category.currentCategory);

  const { loading, data } = useQuery(QUERY_DONATIONS);

  useEffect(() => {
    if (data) {
      // dispatch({
      //   type: UPDATE_DONATIONS,
      //   donations: data.donations,
      // });
      dispatch(actions.updateDonations(data.donations));
      data.donations.forEach((donation) => {
        idbPromise('donations', 'put', donation);
      });
    } else if (!loading) {
      idbPromise('donations', 'get').then((donations) => {
        // dispatch({
        //   type: UPDATE_DONATIONS,
        //   donations: donations,
        // });
        dispatch(actions.updateDonations(donations));
      });
    }
  }, [data, loading, dispatch]);

  function filterDonations() {
    if (!currentCategory) {
      return donations;
    }

    return donations.filter(
      (donation) => donation.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Donations:</h2>
      {donations.length ? (
        <div className="flex-row">
          {filterDonations().map((donation) => (
            <DonationItem
              key={donation._id}
              _id={donation._id}
              image={donation.image}
              name={donation.name}
              price={donation.price}
              quantity={donation.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any donations yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default DonationList;
