import Link from "next/link";
import React from "react";

const F4 = () => {
  return (
    <>
      <h2>F4 Page</h2>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">About</Link>
    </>
  );
};

export default F4;
