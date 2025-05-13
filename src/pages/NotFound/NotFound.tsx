// components
import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";

// style
import "./NotFound.css";

export const NotFound = () => {
  return (
    <>
      <Header isScrollEnabled={false} />
      <main>
        <section className="not_found">
          <h1>404</h1>
          <p>The page you looking for it not found</p>
          <Link to="/">
            <button type="button">Go to home</button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};
