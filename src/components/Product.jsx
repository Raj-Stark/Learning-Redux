import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
const Product = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const result = await resp.json();

    setProducts(result);
  };

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((prod) => {
        return (
          <div className="card" key={prod.id}>
            <img src={prod.image} alt="" />
            <h4>{prod.title}</h4>
            <h3>${prod.price}</h3>
            <button onClick={() => handleAdd(prod)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
