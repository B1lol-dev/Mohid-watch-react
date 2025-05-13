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
              <img
                src="./assets/Search_blue.png"
                alt="Search_blue"
                id="input_img"
              />
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
          <img src="./assets/hero_img.png" alt="" />
        </div>
      </div>
    </section>
  );
};
