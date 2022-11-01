import React from "react";
import "./ProductItem.css";

const ProductItem = ({ name, value }) => {
  return (
    <div className="productInfoItem">
      <div className="productInfoKey">{name}</div>
      <div className="productInfoValue">{value}</div>
    </div>
  );
};

export default ProductItem;
