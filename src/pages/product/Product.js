import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "./../../components/chart/Chart";
import { productsData } from "../../data";
import ProductItem from "./productItem/ProductItem";
import PublishIcon from "@mui/icons-material/Publish";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h3 className="productTitle">محصول</h3>
        <Link to="./newProduct">
          <button className="productAddButton">سفارش‌دادن</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            title="فروش ماهانه"
            data={productsData}
            dataKey="sales"
            aspect="4"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className="productInfoImg" src="/images/dell.jpg" alt="dell" />
            <span className="productName">Dell LapTop</span>
          </div>

          <div className="productInfoBottom">
            <ProductItem name="شناسه:" value="۱۳۲" />
            <ProductItem name="نام:" value="Dell LapTop" />
            <ProductItem name="قیمت:" value="۹۰,۰۰۰ تومان" />
            <ProductItem name="فعال:" value="بله" />
            <ProductItem name="موجودی:" value="نداریم" />
          </div>
        </div>
      </div>
      <div className="prductBottom">
        <form className="prductForm">
          <div className="prductFormRight">
            <label>نام محصول</label>
            <input type="text" placeholder="Dell Laptop" />

            <label>موجودی</label>
            <select id="inStock">
              <option value="yes">بله</option>
              <option value="no">خیر</option>
            </select>

            <label>فعالیت</label>
            <select id="inStock">
              <option value="yes">بله</option>
              <option value="no">خیر</option>
            </select>
          </div>
          <div className="prductFormLeft">
            <div className="prductUpLoader">
              <img
                src="/images/dell.jpg"
                alt="dell"
                className="prductUpLoaderImg"
              />
              <label>
                <PublishIcon />
              </label>
            </div>
            <button className="productButton">بارگذاری (ویرایش)</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
