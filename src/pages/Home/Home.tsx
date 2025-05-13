import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
};
