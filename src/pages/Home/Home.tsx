import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { Hero } from "./components/Hero/Hero";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="watches" id="watches">
          <div className="container">
            <div className="watches_cards">
              <div className="watch_card">
                <div className="watch_card_img">
                  <img src="./assets/watch1.png" alt="" />
                </div>

                <div className="watch_card_text">
                  <h1>Apple</h1>
                  <p>
                    Apple is one of the most famous smart watches providing
                    company.
                  </p>
                </div>
              </div>

              <div className="watch_card">
                <div className="watch_card_img">
                  <img src="./assets/watch2.png" alt="" />
                </div>

                <div className="watch_card_text">
                  <h1>Xiaomi</h1>
                  <p>Xiaomi smart watches are produced by MI company.</p>
                </div>
              </div>

              <div className="watch_card">
                <div className="watch_card_img">
                  <img src="./assets/watch3.png" alt="" />
                </div>

                <div className="watch_card_text">
                  <h1>FitBit</h1>
                  <p>
                    FitBit smart watches are best for there health and fitness
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent_products" id="recent_products">
          <div className="container">
            <p className="subtitle">Find your favourite smart watch.</p>
            <h1 className="title">Our Latest Products</h1>

            <div className="cards">
              <div className="card" data-id="1">
                <div className="card_img">
                  <img src="./assets/card1.png" alt="card1" />
                  <div className="card_img_items">
                    <button className="card_shop">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="card_heart"></button>
                  </div>
                </div>

                <div className="card_text">
                  <h1>Apple Smart I</h1>

                  <div className="stars">OOOOO</div>

                  <div className="card_price">
                    <span id="not_price1" className="not_price"></span>
                    <p id="price1" className="price"></p>
                  </div>
                </div>
              </div>

              <div className="card" data-id="2">
                <div className="card_img">
                  <img src="./assets/card2.png" alt="card1" />
                  <div className="card_img_items">
                    <button className="card_shop">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="card_heart" id="card_heart"></button>
                  </div>
                </div>

                <div className="card_text">
                  <h1>Apple Smart II</h1>

                  <div className="stars">OOOOO</div>

                  <div className="card_price">
                    <span id="not_price2" className="not_price"></span>
                    <p id="price2" className="price"></p>
                  </div>
                </div>
              </div>

              <div className="card" data-id="3">
                <div className="card_img">
                  <img src="./assets/card3.png" alt="card1" />
                  <div className="card_img_items">
                    <button className="card_shop">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="card_heart"></button>
                  </div>
                </div>

                <div className="card_text">
                  <h1>Apple Smart III</h1>

                  <div className="stars">OOOOO</div>

                  <div className="card_price">
                    <span id="not_price3" className="not_price"></span>
                    <p id="price3" className="price"></p>
                  </div>
                </div>
              </div>

              <div className="card" data-id="4">
                <div className="card_img">
                  <img src="./assets/card4.png" alt="card1" />
                  <div className="card_img_items">
                    <button className="card_shop">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="card_heart"></button>
                  </div>
                </div>

                <div className="card_text">
                  <h1>Apple Smart IV</h1>

                  <div className="stars">OOOOO</div>

                  <div className="card_price">
                    <span id="not_price4" className="not_price"></span>
                    <p id="price4" className="price"></p>
                  </div>
                </div>
              </div>

              <div className="card" data-id="5">
                <div className="card_img">
                  <img src="./assets/card5.png" alt="card1" />
                  <div className="card_img_items">
                    <button className="card_shop">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="card_heart"></button>
                  </div>
                </div>

                <div className="card_text">
                  <h1>Samsung Watch Pro</h1>

                  <div className="stars">OOOOO</div>

                  <div className="card_price">
                    <span id="not_price5" className="not_price"></span>
                    <p id="price5" className="price"></p>
                  </div>
                </div>
              </div>

              <div className="card" data-id="6">
                <div className="card_img">
                  <img src="./assets/card6.png" alt="card1" />
                  <div className="card_img_items">
                    <button className="card_shop">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="card_heart"></button>
                  </div>
                </div>

                <div className="card_text">
                  <h1>Fitbit Max 1</h1>

                  <div className="stars">OOOOO</div>

                  <div className="card_price">
                    <span id="not_price6" className="not_price"></span>
                    <p id="price6" className="price"></p>
                  </div>
                </div>
              </div>
            </div>

            <button className="view_more_btn">View More</button>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <p className="subtitle">Here are our some of the best clients.</p>
            <h1 className="title">What People Say About Us</h1>

            <div className="carousel_wrapper">
              <div className="carousel" id="carousel">
                <div className="carousel_item" id="carousel_item1">
                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hamza_faizi.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hamza Faizi</h1>
                      <p>
                        Don’t waste time, just order! This is the best website
                        to puschase smart watches.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>

                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hafiz_huzaifa.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hafiz Huzaifa</h1>
                      <p>
                        I’ve been purchasing smart watches of Mohid for a long
                        time. All the products are good quality.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>

                <div className="carousel_item" id="carousel_item2">
                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hamza_faizi.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hamza Faizi</h1>
                      <p>
                        Don’t waste time, just order! This is the best website
                        to puschase smart watches.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>

                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hafiz_huzaifa.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hafiz Huzaifa</h1>
                      <p>
                        I’ve been purchasing smart watches of Mohid for a long
                        time. All the products are good quality.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>

                <div className="carousel_item" id="carousel_item3">
                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hamza_faizi.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hamza Faizi</h1>
                      <p>
                        Don’t waste time, just order! This is the best website
                        to puschase smart watches.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>

                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hafiz_huzaifa.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hafiz Huzaifa</h1>
                      <p>
                        I’ve been purchasing smart watches of Mohid for a long
                        time. All the products are good quality.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>

                <div className="carousel_item" id="carousel_item4">
                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hamza_faizi.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hamza Faizi</h1>
                      <p>
                        Don’t waste time, just order! This is the best website
                        to puschase smart watches.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>

                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hafiz_huzaifa.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hafiz Huzaifa</h1>
                      <p>
                        I’ve been purchasing smart watches of Mohid for a long
                        time. All the products are good quality.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>

                <div className="carousel_item" id="carousel_item5">
                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hamza_faizi.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hamza Faizi</h1>
                      <p>
                        Don’t waste time, just order! This is the best website
                        to puschase smart watches.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>

                  <div className="carousel_card">
                    <div className="carousel_img">
                      <img src="./assets/hafiz_huzaifa.png" alt="" />
                    </div>

                    <div className="carousel_text">
                      <h1>Hafiz Huzaifa</h1>
                      <p>
                        I’ve been purchasing smart watches of Mohid for a long
                        time. All the products are good quality.
                      </p>

                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel_control">
                <button id="carousel1"></button>
                <button id="carousel2"></button>
                <button id="carousel3"></button>
                <button id="carousel4"></button>
                <button id="carousel5"></button>
              </div>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <div className="contact_wrapper">
              <div className="contact_text">
                <h1>Subscribe To Newsletter</h1>
                <p>Get free guide about smart watches daily.</p>

                <div className="contact_input">
                  <form action="subscribe">
                    <input
                      required
                      type="email"
                      placeholder="Enter Email Address"
                      name="input"
                      id="hero_input"
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>

              <div className="contact_img">
                <img src="./assets/card1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
