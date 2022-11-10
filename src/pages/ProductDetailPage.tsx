import React from "react";
import PageTop from "../components/PageTop/PageTop";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
  return (
    <>
      <PageTop
        title="ProductDetail"
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        desc="Copper mug try-hard pitchfork pour-over freegan heirloom neutra"
      />
      <ProductDetail />
    </>
  );
};

export default ProductDetailPage;
