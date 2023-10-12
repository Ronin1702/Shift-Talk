import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
// import { useStoreContext } from '../../utils/GlobalState';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../utils/reducers/cartSlice';
import './style.css';

const stripePromise = loadStripe('pk_test_51NxE6PJNyOG8ZaW1k4p1tqfDQqNUsVNfKrWncrApS5CJFcAimdYAE4ER9GUUOOljgV1kNPjOCnkWuaIuG9KNbwiI00d6E9NJts');

const Cart = () => {
  // const [state, dispatch] = useStoreContext();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  const dispatch = useDispatch();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      console.log("Cart from IDB:", cart);
      // dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
      dispatch(actions.addMultipleToCart(cart));
    }

    if (!cartItems.length) {
      getCart();
    }
  }, [cartItems.length, dispatch]);

  function toggleCart() {
    // dispatch({ type: TOGGLE_CART });
    dispatch(actions.toggleCart());
  }

  function calculateTotal() {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    cartItems.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!cartOpen) {
    return (
      <div className='cart-closed' onClick={toggleCart}>
        <span className='cart-icon' role='img' aria-label='cart icon'>
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className='cart'>
      <div className='close' onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {cartItems.length ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className='flex-row space-between'>
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role='img' aria-label='shocked'>
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
