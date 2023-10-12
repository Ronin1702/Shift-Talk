import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../utils/reducers/categorySlice';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch(actions.updateCategories(categoryData.categories));
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch(actions.updateCategories(categories));
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch(actions.updateCurrentCategory(id));
  };

  return (
    <div className='container text-center mt-3'>
      {categories.map((item) => (
        <button id="category-button"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
          className={
            item._id === currentCategory ? 'bg-gradient text-light' : ''
          }
          style={
            item._id === currentCategory ? { backgroundColor: 'orange' } : {}
          }
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
