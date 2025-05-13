import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Products } from "./components/Products/Products";
import { Watches } from "./components/Watches/Watches";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Watches />
        <Products />
        <About />
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
