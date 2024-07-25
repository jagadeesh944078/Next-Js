import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return <h1>Details About Product {params.productId}</h1>;
};

export default ProductDetails;
