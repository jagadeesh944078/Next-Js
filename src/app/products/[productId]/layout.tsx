import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h2>Feature products</h2>
    </>
  );
};

export default ProductDetailsLayout;
