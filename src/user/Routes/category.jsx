import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FormsApi from "../../api/api";

//components
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import Products from "../../Components/products_scroll";
import CatalogCtr from "../../Components/CatalogCtr";

//styles
import "../Design/home.css";
import "../Design/Category.css";

//assets
import BannerImage from "../../assets/airmax.jpg";

function Category() {
  const [state, setState] = useState({
    sub_categories: [],
    category: {},
    category_pdts: [],
  });
  let params = useParams();

  useEffect(() => {
    (async () => {
      let sub_categories = await new FormsApi().get(
        `/category/${params.id}/sub_categories`
      );
      let category = await new FormsApi().get(`/category/${params.id}`);
      let category_pdts = await new FormsApi().get(
        `/product/category/${params.id}`
      );
      if (sub_categories !== "Error" && category !== "Error") {
        setState({
          ...state,
          category,
          sub_categories,
          category_pdts,
        });
      }
    })();
  }, []);

  return (
    <>
      <MainHeader />
      <section className="ctg-banner-ctr">
        <img
          src={
            state.category.category_image
              ? state.category.category_image
              : BannerImage
          }
          alt="SHOP ON PLUS"
        />
      </section>
      {state.sub_categories.length === 0 ? (
        <section className="products-scroll-ctr">
          <div
            style={{
              textAlign: "center",
              margin: "30px 0px",
              width: "100%",
            }}
          >
            Loading Sub Categories...
          </div>
        </section>
      ) : (
        state.sub_categories.map((el, i) => {
          return (
            <section className="products-scroll-ctr" key={i}>
              <Products sub_category={el} />
            </section>
          );
        })
      )}

      <div className="width-auto">
        <CatalogCtr
          products={state.category_pdts}
          title={state.category.category_name}
        />
      </div>
      <MainFooter />
    </>
  );
}

export default Category;
