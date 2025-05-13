// components
import { Carousel } from "./components/Carousel/Carousel";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="subtitle">Here are our some of the best clients.</p>
        <h1 className="title">What People Say About Us</h1>

        <Carousel />
      </div>
    </section>
  );
};
