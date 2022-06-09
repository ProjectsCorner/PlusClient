import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * api
 */

//components
import MainHeader from "../../Components/MainHeader";
import Products from "../../Components/products_scroll";
import MainFooter from "../../Components/MainFooter";
import FormsApi from "../../api/api";

//assets
import welcome_banner from "../../assets/banner_1.png";
import welcome_shoes from "../../assets/airmax.jpg";
import welcome_phone_accessories from "../../assets/studio-speech.png";
import welcome_sandals from "../../assets/men_sandals.jpg";
import welcome_utencils from "../../assets/utencils.jpg";
import welcome_tshirts from "../../assets/cloth4.jpg";
import welcome_drinks from "../../assets/milk.jpg";
import welcome_foodstuffs from "../../assets/super_rice.png";
import welcome_electronics from "../../assets/tea.jpg";
import welcome_laptop_accessories from "../../assets/hp_battery.jpg";
import welcome_music from "../../assets/headsets.png";
import welcome_computers from "../../assets/hp-elitebook.png";
import welcome_cleaning from "../../assets/cleaning.jpg";

//styles
import "../Design/home.css";

function Home() {
  const [state, setState] = useState({
    bannerCounter: 1,
    sub_categories: [],
  });

  useEffect(() => {
    (async () => {
      let sub_categories = await new FormsApi().get(`/sub-category/all`);
      if (sub_categories !== "Error" && sub_categories.status) {
        setState({
          ...state,
          sub_categories: sub_categories.result,
        });
      }
    })();

    return () => {
      setState({
        ...state,
        sub_categories: [],
      });
    };
  }, []);

  return (
    <>
      <MainHeader />
      <main>
        <section className="main-banner-ctr">
          <ul className="ctg-li">
            <li className="ctg-item">
              <Link
                className="ctg-name"
                to="/category/628a66f4dfadcc15c2546ef7"
              >
                <i className="las la-shopping-basket ctg-icon"></i>
                EasyMarket On Plus
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                className="ctg-name"
                to="/category/627b655966349809adc1d7c6"
              >
                <i className="las la-pizza-slice ctg-icon"></i>
                Fast Foods &amp; Drinks
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                className="ctg-name"
                to="/category/627b657566349809adc1d7cd"
              >
                <i className="las la-layer-group ctg-icon"></i>
                Supermarket
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                to="/category/627b658f66349809adc1d7d4"
                className="ctg-name"
              >
                <i className="las la-headphones-alt ctg-icon"></i>
                Phones &amp; Accessories
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                to="/category/627b659f66349809adc1d7db"
                className="ctg-name"
              >
                <i className="las la-charging-station ctg-icon"></i>
                Electronics
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                to="/category/627b65b766349809adc1d7e4"
                className="ctg-name"
              >
                <i className="las la-tshirt ctg-icon"></i>
                Clothes &amp; Shoes
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                to="/category/627b65d866349809adc1d7ed"
                className="ctg-name"
              >
                <i className="las la-utensils ctg-icon"></i>
                Kitchen stuff &amp; Utensils
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                className="ctg-name"
                to="/category/627b65f666349809adc1d7f4"
              >
                <i className="las la-desktop ctg-icon"></i>
                Computing &amp; Accessories
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                className="ctg-name"
                to="/category/627b661966349809adc1d7fc"
              >
                <i className="las la-desktop ctg-icon"></i>
                Cleaning, Healthy &amp; Beauty
              </Link>
            </li>
            <li className="ctg-item">
              <Link
                to="/category/627b664566349809adc1d803"
                className="ctg-name"
              >
                <i className="las la-paperclip ctg-icon"></i>
                Stationery
              </Link>
            </li>
          </ul>
          <div className="banner-pm">
            <PromotionImage
              images={[
                welcome_banner,
                welcome_banner,
                welcome_banner,
                welcome_banner,
                welcome_banner,
              ]}
            />
          </div>
          <div className="banner-pm-sm">
            <div className="">
              <img
                src={welcome_banner}
                alt="BANNER"
                width="100%"
                height="100%"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="">
              <img
                src={welcome_banner}
                alt="BANNER"
                width="100%"
                height="100%"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </section>
        <section className="main-welcome-ctr">
          <div className="welcome-ctr">
            <div className="welcome-hdr">
              <span>Plus, Thanks For The Visit</span>
              <span>Shop The Best Products</span>
            </div>
            <div className="welcome-items">
              <div className="welcome-item">
                <Link to="/catalog?sbc=629a3d8841cbfc14a67a7103">
                  <img src={welcome_utencils} alt="Shop Foods on Yammie" />
                </Link>
                <div>
                  <div>Utencils</div>
                </div>
              </div>
              <div className="welcome-item">
                <Link to={`/catalog?sbc=629a3e4241cbfc14a67a710e`}>
                  <img src={welcome_tshirts} alt="T shirts on plus" />
                </Link>
                <div>
                  <div>T Shirts</div>
                </div>
              </div>
              <div className="welcome-item">
                <Link to={`/catalog?sbc=629a3e9d41cbfc14a67a711a`}>
                  <img src={welcome_sandals} alt="Get Sandals on Plus" />
                </Link>

                <div>
                  <div>Sandals</div>
                </div>
              </div>
              <div className="welcome-item">
                <div>
                  <Link to={`/catalog?sbc=629a3f8641cbfc14a67a7127`}>
                    <img
                      src={welcome_phone_accessories}
                      alt="Shop your Phone accessories from plus"
                    />
                  </Link>
                </div>
                <div>
                  <div>Phone Accessories</div>
                </div>
              </div>
              <div className="welcome-item">
                <Link to={`/catalog?sbc=629a3f8641cbfc14a67a7127`}>
                  <img src={welcome_shoes} alt="Shop Nice Shoes from plus" />
                </Link>

                <div>
                  <div>Shoes</div>
                </div>
              </div>
              <div className="welcome-item">
                <Link to={`/catalog?sbc=629a414041cbfc14a67a7135`}>
                  <img src={welcome_foodstuffs} alt="Shop Foods on Plus" />
                </Link>
                <div>
                  <div>Food Stuffs</div>
                </div>
              </div>
            </div>
            <div className="welcome-items">
              <div className="welcome-item">
                <Link to={`/catalog?sbc=627b659f66349809adc1d7db`}>
                  <img
                    src={welcome_music}
                    alt="Get Music Accessories on Plus"
                  />
                </Link>

                <div>
                  <div>For Music</div>
                </div>
              </div>
              <div className="welcome-item">
                <div>
                  <Link to={`/category/627b659f66349809adc1d7db`}>
                    <img
                      src={welcome_electronics}
                      alt="One Stop for electronics"
                    />
                  </Link>
                </div>
                <div>
                  <div>Electronics</div>
                </div>
              </div>
              <div className="welcome-item">
                <Link to={`/catalog?sbc=629a44876d1d211ac33352a8`}>
                  <img src={welcome_drinks} alt="Get Cold Drinks on Plus" />
                </Link>

                <div>
                  <div>Drinks</div>
                </div>
              </div>
              <div className="welcome-item">
                <div>
                  <Link to="/category/627b661966349809adc1d7fc">
                    <img
                      src={welcome_cleaning}
                      alt="Cleaning Materials On Plus"
                    />
                  </Link>
                </div>
                <div>
                  <div>Cleaning</div>
                </div>
              </div>
              <div className="welcome-item">
                <div>
                  <Link to="/category/627b65f666349809adc1d7f4">
                    <img src={welcome_computers} alt="Shop Foods on Yammie" />
                  </Link>
                </div>
                <div>
                  <div>Computers</div>
                </div>
              </div>
              <div className="welcome-item">
                <div>
                  <Link to="/catalog?sbc=629a44ed6d1d211ac33352b9">
                    <img
                      src={welcome_laptop_accessories}
                      alt="Shop Foods on Yammie"
                    />
                  </Link>
                </div>
                <div>
                  <div>PC Accessories</div>
                </div>
              </div>
            </div>
          </div>
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
      </main>
      <MainFooter />
    </>
  );
}

export default Home;

const PromotionImage = ({ images }) => {
  const [state, setState] = useState({ current_banner: 1 });

  useEffect(() => {
    setTimeout(() => {
      setState({
        current_banner:
          state.current_banner === images.length ? 1 : state.current_banner + 1,
      });
    }, 5000);

    return () => {};
  });

  return (
    <>
      <div className="banner-pm-indicators">
        {images.map((v, i) => (
          <button
            key={i}
            className={
              state.current_banner === i + 1 ? "banner-pm-indicator-active" : ""
            }
          ></button>
        ))}
      </div>
      <img
        src={images[state.current_banner - 1]}
        alt="BANNER"
        width="100%"
        height="100%"
        style={{ borderRadius: "5px" }}
      />
    </>
  );
};
