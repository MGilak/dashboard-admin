import React, { useState } from "react";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import { products } from "../../data";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Products = () => {
  const [userProducts, setUserProducts] = useState(products);
  const deletProduct = (id) => {
    setUserProducts(userProducts.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "idd", headerName: "شناسه", width: 90 },
    {
      field: "title",
      headerName: "نام",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`}>
            <div className="productUser">
              <img className="productImg" src={params.row.avatar} alt="user" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 200,
    },
    {
      field: "active",
      headerName: "عملیات",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productEdit">ویرایش</button>
            </Link>
            <DeleteOutlineIcon
              className="productDelete"
              onClick={() => deletProduct(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={userProducts}
        columns={columns}
        pageSize={3}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};

export default Products;
