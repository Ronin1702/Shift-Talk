import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className='container mt-2 my-1'>
        <div className='row fs-6'>
          <Link className='text-secondary' to='/pros'>
            {' '}
            🏁 Back to Pro Shop
          </Link>
        </div>

        {user ? (
          <>
            <h2 className='text-secondary text-end fs-4'>
              Order History for{' '}
              <span className='text-warning fs-2'>{user.username}</span>
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className='my-2'>
                <h3 className='text-success text-end fs-5'>
                  {' '}
                  🗓️
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <hr />
                <div className='flex-row'>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className='card px-1 py-1'>
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div className='mb-2'>
                        <span className='text-secondary'>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
