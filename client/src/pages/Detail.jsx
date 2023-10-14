import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { actions as cartActions } from '../utils/reducers/cartSlice';
import { actions as productsActions } from '../utils/reducers/productsSlice';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  // const { products, cart } = state;
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch(productsActions.updateProducts(data.products));

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch(productsActions.updateProducts(indexedProducts));
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
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
      dispatch(
        cartActions.addToCart({ ...currentProduct, purchaseQuantity: 1 })
      );
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch(cartActions.removeFromCart(currentProduct._id));
    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className='container my-1'>
          <div className='flex-row mt-3 fs-6'>
            <Link className='text-white' to='/pros'>
              {' '}
              🏁 Back to Pro Shop
            </Link>
          </div>

          <h2>{currentProduct.name}</h2>
          <hr />
          <p>{currentProduct.description}</p>

          <p className='text-end'>
            <strong>Price: </strong>${currentProduct.price}{' '}
            <button
              className='bg-warning bg-gradient text-white'
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button
              className='bg-danger bg-gradient'
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt='loading' /> : null}
    </>
  );
}

export default Detail;
