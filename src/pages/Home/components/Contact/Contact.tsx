// assets
import contact_img from "../../assets/contact_img.png";

// style
import "./Contact.css";

// hooks
import { useState } from "react";

// components
import { toast, Toaster } from "react-hot-toast";

export const Contact = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_text">
            <h1>Subscribe To Newsletter</h1>
            <p>Get free guide about smart watches daily.</p>

            <div className="contact_input">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success(`We sent an verification code to ${email}`);
                }}
              >
                <input
                  required
                  type="email"
                  placeholder="Enter Email Address"
                  id="hero_input"
                  onChange={(e) => setEmail(e.target.value)}
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
