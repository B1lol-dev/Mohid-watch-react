// assets
import watch_1_img from "../../assets/watch1.png";
import watch_2_img from "../../assets/watch2.png";
import watch_3_img from "../../assets/watch3.png";

// style
import "./Watches.css";

export const Watches = () => {
  return (
    <section className="watches" id="watches">
      <div className="container">
        <div className="watches_cards">
          <div className="watch_card">
            <div className="watch_card_img">
              <img src={watch_1_img} alt="" />
            </div>

            <div className="watch_card_text">
              <h1>Apple</h1>
              <p>
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </div>

          <div className="watch_card">
            <div className="watch_card_img">
              <img src={watch_2_img} alt="" />
            </div>

            <div className="watch_card_text">
              <h1>Xiaomi</h1>
              <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
          </div>

          <div className="watch_card">
            <div className="watch_card_img">
              <img src={watch_3_img} alt="" />
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
  );
};
