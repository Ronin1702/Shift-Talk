import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../utils/reducers/productsSlice';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const currentCategory = useSelector((state) => state.category.currentCategory);

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch(actions.updateProducts(data.products));
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch(actions.updateProducts(products));
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return products;
    }

    return products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      {products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3> Cart 🛒 is 🈳 Empty </h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
