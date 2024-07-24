const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <h1>Details About Product {params.productId}</h1>;
};

export default ProductDetails;
