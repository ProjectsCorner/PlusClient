import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Base64 } from "js-base64";
import user from "../app.config";

//api
import FormsApi from "../api/api";

//styling
import "../Design/CatalogCtr.css";

//assets
import Welcome_Shoes from "../assets/airmax.jpg";

export default ({ products }) => {
  return (
    <div className="main-CatalogCtr">
      <div className="sort-CatalogCtr -b-x">
        <div className="ctlg-sort" id="ctlg-sort">
          <h3>Sort By Price</h3>
          <form id="sort-price-form" className="price-form">
            <div className="price-slide">
              <input
                type="range"
                name=""
                id="input-slide-left"
                min="0"
                max="100"
                value="0"
                title="Slide to Set Price"
              />
              <input
                type="range"
                name=""
                id="input-slide-right"
                min="0"
                max="100"
                value="100"
                title="Slide to Set Price"
              />
              <div className="slider">
                <div className="track"></div>
                <div className="range"></div>
                <div className="thumb left"></div>
                <div className="thumb right"></div>
              </div>
            </div>
            <div className="display-price -stv">
              <input type="text" id="lower-p" value="0" name="lp" />
              <input type="text" id="higher-p" name="hp" />
            </div>
            <button className="sort-btn" type="submit" id="_sbp">
              Apply
            </button>
          </form>
          <h3>Sort By Discount</h3>
          <form id="_sdiscount">
            <ul className="sort-list">
              <li className="input-field">
                <input type="radio" name="_discount" id="" value="1" />
                <label htmlFor="discount"> &lt; 10%</label>
              </li>
              <li className="input-field">
                <input type="radio" name="_discount" id="" value="2" />
                <label htmlFor="discount">10% - 20%</label>
              </li>
              <li className="input-field">
                <input type="radio" name="_discount" id="" value="3" />
                <label htmlFor="discount">20% - 30%</label>
              </li>
              <li className="input-field">
                <input type="radio" name="_discount" id="" value="4" />
                <label htmlFor="discount">30% - 40%</label>
              </li>
              <li className="input-field">
                <input type="radio" name="_discount" id="" value="5" />
                <label htmlFor="discount">40% - 50%</label>
              </li>
              <li className="input-field">
                <input type="radio" name="_discount" id="" value="6" />
                <label htmlFor="discount"> &gt; 50%</label>
              </li>
            </ul>
            <button className="sort-btn" type="submit">
              Apply
            </button>
          </form>
        </div>
      </div>
      <div className="pdts-CatalogCtr">
        <div className="-b-x">
          <span>dummy data</span>
          <span>Manage</span>
        </div>
        <div className="-b-x">
          {products.length === 0 && <div>No Products return</div>}
          {products.map((v, i) => {
            return (
              <div key={i} className="pdt-CatalogCtr">
                <Product product={v} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Product = ({ product }) => {
  if (user !== null) {
  } else {
  }
  // const data = Base64.encode(JSON.stringify(res.user));
  // localStorage.setItem("token", data);

  let cart = [];

  /**
   * Hooks
   */
  const navigate = useNavigate();
  const [state, setState] = useState({});
  return (
    <>
      <div className="pdt-CatalogCtr-discount">25%</div>
      <div className="pdt-CatalogCtr-img">
        <img
          src={state.images.length === 0 ? Welcome_Shoes : state.images[0]}
          alt="PLUS PRODUCT FROM PROPS"
        />
      </div>
      <div className="pdt-CatalogCtr-name">
        <b>{product.product_name}</b> - {product.product_description}
      </div>
      <div className="pdt-CatalogCtr-current-price">{`UGX ${product.product_price}`}</div>
      <div className="pdt-CatalogCtr-prev-price">
        {product.product_discount ? product.product_discount : ""}
      </div>
      <div className="pdt-CatalogCtr-btn-ctr">
        <button onClick={() => {}}>Add to Cart</button>
      </div>
    </>
  );
};
