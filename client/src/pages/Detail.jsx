import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
// import { useStoreContext } from '../utils/GlobalState';
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_QUANTITY,
//   ADD_TO_CART,
//   UPDATE_DONATIONS,
// } from '../utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { actions as cartActions } from '../utils/reducers/cartSlice';
import { actions as donationsActions } from '../utils/reducers/donationsSlice';
import { QUERY_DONATIONS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  // const [state, dispatch] = useStoreContext();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentDonation, setCurrentDonation] = useState({});

  const { loading, data } = useQuery(QUERY_DONATIONS);

  // const { donations, cart } = state;
  const donations = useSelector((state) => state.donations);
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // already in global store
    if (donations.length) {
      setCurrentDonation(donations.find((donation) => donation._id === id));
    }
    // retrieved from server
    else if (data) {
      // dispatch({
      //   type: UPDATE_DONATIONS,
      //   donations: data.donations,
      // });
      dispatch(donationsActions.updateDonations(data.donations));

      data.donations.forEach((donation) => {
        idbPromise('donations', 'put', donation);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('donations', 'get').then((indexedDonations) => {
        // dispatch({
        //   type: UPDATE_DONATIONS,
        //   donations: indexedDonations,
        // });
        dispatch(donationsActions.updateDonations(indexedDonations));
      });
    }
  }, [donations, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      // dispatch({
      //   type: UPDATE_CART_QUANTITY,
      //   _id: id,
      //   purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      // });
      dispatch(
        cartActions.updateCartQuantity({
          _id: id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        })
      );
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      // dispatch({
      //   type: ADD_TO_CART,
      //   donation: { ...currentDonation, purchaseQuantity: 1 },
      // });
      dispatch(
        cartActions.addToCart({ ...currentDonation, purchaseQuantity: 1 })
      );
      idbPromise('cart', 'put', { ...currentDonation, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    // dispatch({
    //   type: REMOVE_FROM_CART,
    //   _id: currentDonation._id,
    // });
    dispatch(cartActions.removeFromCart(currentDonation._id));
    idbPromise('cart', 'delete', { ...currentDonation });
  };

  return (
    <>
      {currentDonation && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Donations</Link>

          <h2>{currentDonation.name}</h2>

          <p>{currentDonation.description}</p>

          <p>
            <strong>Price:</strong>${currentDonation.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentDonation._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentDonation.image}`}
            alt={currentDonation.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
