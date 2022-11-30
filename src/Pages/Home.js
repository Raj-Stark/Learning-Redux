import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to our redux store</h2>
      <section>
        <h3>Products</h3>
        <Product></Product>
      </section>
    </div>
  );
};

export default Home;
