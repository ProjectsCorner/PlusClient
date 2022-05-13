import react, { useEffect, useState } from "react";

/**
 *
 * Components
 */
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import CatalogCtr from "../../Components/CatalogCtr";
import Products from "../../Components/products_scroll";

/**
 * api
 */
import FormsApi from "../../api/api";

/**
 * Styling
 */
import "../Design/home.css";

const Catalog = () => {
  /**
   * Hooks
   */
  const [state, setState] = useState({ products: [] });

  const searchParams = new URLSearchParams(window.location.search);
  useEffect(async () => {
    let res = await new FormsApi().get(
      `/product/search/${searchParams.get("q")}`
    );
    if (res !== "Error") {
      if (res.status === false) {
        setState({ ...state, products: [] });
      } else {
        setState({ ...state, products: res });
      }
    }
  }, []);

  return (
    <>
      <MainHeader />
      <main className="width-auto">
        <div style={{ width: "100%" }}>
          <CatalogCtr products={state.products} title={searchParams.get("q")} />
        </div>
        <Products />
      </main>
      <MainFooter />
    </>
  );
};

export default Catalog;
