import Link from "next/link";
import React from "react";

const ProductList = () => {
  const productId = 100;
  return (
    <>
      <Link href="./">Home</Link>
      <h1>Prodcut List</h1>
      <h2>
        <Link href="products/1">product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">product 2</Link>
      </h2>
      <h2>
        <Link href="products/3">product 3</Link>
      </h2>
      <h2>
        <Link href="products/3">product 1</Link>
      </h2>
    </>
  );
};

export default ProductList;
