import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
// import { useStoreContext } from '../../utils/GlobalState';
// import {
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
// } from '../../utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../utils/reducers/categorySlice';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  // const [state, dispatch] = useStoreContext();
  const dispatch = useDispatch();

  // const { categories } = state;
  const categories = useSelector((state) => state.category.categories);

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      // dispatch({
      //   type: UPDATE_CATEGORIES,
      //   categories: categoryData.categories,
      // });
      dispatch(actions.updateCategories(categoryData.categories));
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        // dispatch({
        //   type: UPDATE_CATEGORIES,
        //   categories: categories,
        // });
        dispatch(actions.updateCategories(categories));
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    // dispatch({
    //   type: UPDATE_CURRENT_CATEGORY,
    //   currentCategory: id,
    // });
    dispatch(actions.updateCurrentCategory(id));
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <button
        onClick={() => {
          handleClick('');
        }}
      >
        All
      </button>
    </div>
  );
}

export default CategoryMenu;
