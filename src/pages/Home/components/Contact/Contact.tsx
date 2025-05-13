// assets
import contact_img from "../../assets/contact_img.png";

// style
import "./Contact.css";

export const Contact = () => {
  return (
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
            <img src={contact_img} alt="Contact Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
