import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const products = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrappers">
        {products.map((prod) => {
          return (
            <div key={prod.id} className="cartCard">
              <img src={prod.image} alt="" />
              <h5>{prod.title}</h5>
              <h5>${prod.price}</h5>
              <button className="btn" onClick={() => handleRemove(prod.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
