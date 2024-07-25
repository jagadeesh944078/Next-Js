"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // router.back();
    // router.forward();
    // router.replace("/")/
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default OrderProduct;
