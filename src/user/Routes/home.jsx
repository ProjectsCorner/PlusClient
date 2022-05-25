import React, { Component } from "react";
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
import Banner from "../../assets/banner.jpg";
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerCounter: 1,
      banner: ["https://picsum.photos/1000", "https://picsum.photos/1000"],
      sub_categories: [],
    };
  }
  componentDidMount = () => {
    this.startBannerCount();
  };
  startBannerCount = () => {
    setInterval(() => {
      this.setState({
        ...this.state,
        bannerCounter:
          this.state.bannerCounter === 6 ? 1 : this.state.bannerCounter + 1,
      });
    }, 4000);

    (async () => {
      let sub_categories = await new FormsApi().get(`/sub-category/all`);
    })();
  };
  render() {
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
              <PromotionImage active={this.state.bannerCounter} />
            </div>
            <div className="banner-pm-sm">
              <div className="">
                <img
                  src={Banner}
                  alt="BANNER"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="">
                <img
                  src={Banner}
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
                  <div>
                    <img src={welcome_utencils} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Utencils</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_tshirts} alt="T shirts on plus" />
                  </div>
                  <div>
                    <div>T Shirts</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_sandals} alt="Get Sandals on Plus" />
                  </div>
                  <div>
                    <div>Sandals</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_phone_accessories}
                      alt="Shop your Phone accessories from plus"
                    />
                  </div>
                  <div>
                    <div>Phone Accessories</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_shoes} alt="Shop Nice Shoes from plus" />
                  </div>
                  <div>
                    <div>Shoes</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_foodstuffs} alt="Shop Foods on Plus" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
              </div>
              <div className="welcome-items">
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_music}
                      alt="Get Music Accessories on Plus"
                    />
                  </div>
                  <div>
                    <div>For Music</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_electronics}
                      alt="One Stop for electronics"
                    />
                  </div>
                  <div>
                    <div>Electronics</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_drinks} alt="Get Cold Drinks on Plus" />
                  </div>
                  <div>
                    <div>Drinks</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_cleaning}
                      alt="Cleaning Materials On Plus"
                    />
                  </div>
                  <div>
                    <div>Cleaning</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_computers} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Computers</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_laptop_accessories}
                      alt="Shop Foods on Yammie"
                    />
                  </div>
                  <div>
                    <div>PC Accessories</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {this.state.sub_categories.length === 0 ? (
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
            this.state.sub_categories.map((el, i) => {
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
}

export default Home;

const PromotionImage = ({ active }) => {
  return (
    <>
      <div className="banner-pm-indicators">
        {[1, 2, 3].map((v, i) => (
          <button
            key={i}
            className={active === i + 1 ? "banner-pm-indicator-active" : ""}
          ></button>
        ))}
      </div>
      <img
        src={Banner}
        alt="BANNER"
        width="100%"
        height="100%"
        style={{ borderRadius: "5px" }}
      />
    </>
  );
};
