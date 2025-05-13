// style
import "./Hero.css";

// assets
import hero_img from "../../assets/hero_img.png";
import search_blue from "../../../../assets/icons/Search_blue.png";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero_text">
          <h1>
            Discover <br /> Most Suitable Watches
          </h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>

          <div className="hero_input">
            <form action="submit">
              <img src={search_blue} alt="Search_blue" id="input_img" />
              <input
                required
                type="text"
                placeholder="Find the best brands"
                name="input"
                id="hero_input"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className="hero_img">
          <img src={hero_img} alt="" />
        </div>
      </div>
    </section>
  );
};
