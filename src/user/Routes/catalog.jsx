import { useEffect, useState } from "react";

/**
 *
 * Components
 */
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import CatalogCtr from "../../Components/CatalogCtr";

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
  useEffect(() => {
    (async () => {
      let res = searchParams.get("sbc")
        ? await new FormsApi().get(
            `/product/sub_category/${searchParams.get("sbc")}`
          )
        : await new FormsApi().get(`/product/search/${searchParams.get("q")}`);
      if (res !== "Error") {
        if (res.status === false) {
          setState({ ...state, products: [] });
        } else {
          setState({ ...state, products: res.result });
        }
      }
    })();

    return () => {
      setState({
        products: [],
      });
    };
  }, []);

  return (
    <>
      <MainHeader />
      <main className="width-auto width-auto-catalog ">
        <div style={{ width: "100%" }}>
          <CatalogCtr
            products={state.products}
            title={searchParams.get("q") || searchParams.get("title")}
          />
        </div>
      </main>
      <MainFooter />
    </>
  );
};

export default Catalog;
