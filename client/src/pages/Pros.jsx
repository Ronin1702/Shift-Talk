import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import { Link } from 'react-router-dom';

const RentAPro = () => {
  return (
    <div className='container'>
      <div className='row mt-3 text-start fs-6'>
        <Link className='text-white' to='/OrderHistory'>
          {' '}
          🏁 View Orders{' '}
        </Link>
      </div>
      <CategoryMenu />
      <hr />
      <ProductList />
    </div>
  );
};

export default RentAPro;
