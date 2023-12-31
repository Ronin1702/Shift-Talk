import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../utils/reducers/cartSlice';
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const dispatch = useDispatch();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const cart = useSelector((state) => state.cart.cartItems);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch(actions.updateCartQuantity({ _id: _id, purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1 }));
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch(actions.addToCart({ ...item, purchaseQuantity: 1 }));
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} available </div>
        <span className='text-light'>${price}</span>
      </div>
      <button className='align-self-center' onClick={addToCart}>ADD TO CART</button>
    </div>
  );
}

export default ProductItem;
