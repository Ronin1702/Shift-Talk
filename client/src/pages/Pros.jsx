import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import { Link } from 'react-router-dom';

const RentAPro = () => {
  return (
    <div className='container'>
      <div className='row mt-2 text-end fs-6'>
        <Link className='text-secondary' to='/OrderHistory'>
          {' '}
          📖 View Orders{' '}
        </Link>
      </div>
      <CategoryMenu />
      <hr />
      <ProductList />
    </div>
  );
};

export default RentAPro;
