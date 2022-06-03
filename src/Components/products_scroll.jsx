import React, { useEffect, useRef, useState } from "react";
import FormsApi from "../api/api";

//components
import Item from "./products_scroll_item";

//the styling...
import "../Design/products_scroll.css";
import { Link } from "react-router-dom";

export default function Products({ sub_category }) {
  const [state, setState] = useState({ pdts: [] });
  const scrollBackRef = useRef(null);

  useEffect(() => {
    (async () => {
      let pdts = await new FormsApi().get(
        `/product/sub_category/${sub_category.id}`
      );
      if (pdts !== "Error") {
        setState({ ...state, pdts });
      }
    })();

    return () => {
      setState({
        ...state,
      });
    };
  }, []);

  return (
    <div className="-ct -b-x">
      <button
        className="-sc-b"
        onClick={() => {
          scrollBackRef.current.scrollBy({
            top: 0,
            left: -250,
            behavior: "smooth",
          });
        }}
      >
        <i className="las la-chevron-left"></i>
      </button>
      <button
        className="-sc-n"
        onClick={() => {
          scrollBackRef.current.scrollBy({
            top: 0,
            left: 250,
            behavior: "smooth",
          });
        }}
      >
        <i className="las la-chevron-right"></i>
      </button>
      <div className="-ch-all">
        <span>{sub_category.sub_category_name}</span>
        <Link to={`/catalog?sbc=${sub_category.id}`}>
          Check All <i className="las la-chevron-right"></i>
        </Link>
      </div>
      <div className="-scroll -ct-trending" ref={scrollBackRef}>
        {state.pdts.length === 0 ? (
          <div>No Products for this Sub Category....</div>
        ) : (
          state.pdts.map((v, i) => {
            return (
              <Link to={`/item/${v.id}`} key={i}>
                <Item product={v} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
