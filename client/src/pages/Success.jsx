import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import transactionSuccessful from '../assets/transactionSuccessful.gif';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/pros');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <div
          style={{
            width: '300px',
            height: '300px',
            display: 'block',
            margin: 'auto',
            borderRadius: '50%',
            boxShadow: '0px 0px 20px 20px rgba(0,0,0,0.2)',
            overflow: 'hidden'
          }}
        >
          <img
            src={transactionSuccessful}
            alt='transaction successful'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <h2> 🫂 Thank You for your Kind Donation and Interest!</h2>
        <h2>
          {' '}
          🎯 You will now be redirected to{' '}
          <span className='text-warning'>Pro Shop</span>
        </h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
