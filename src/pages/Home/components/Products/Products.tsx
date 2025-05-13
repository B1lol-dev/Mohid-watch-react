// hooks
import { useEffect, useState } from "react";

// components
import { ProductCard } from "../../../../components/common/cards/ProductCard/ProductCard";
import toast, { Toaster } from "react-hot-toast";

// utils
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// constants
import { API_ENDPOINTS, API_URL } from "../../../../constants/api";

// types
interface IProductCard {
  id: number;
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
}

// styles
import "./Products.css";

export const Products = () => {
  const [cards, setCards] = useState<IProductCard[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENDPOINTS.mens_watches}`)
      .then((res) => {
        setCards(res.data.products);

        axios
          .get(`${API_URL}/${API_ENDPOINTS.womens_watches}`)
          .then((res) => {
            setCards((prev) => {
              return [...prev, ...res.data.products];
            });
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }, []);

  return (
    <section className="recent_products" id="recent_products">
      <div className="container">
        <p className="subtitle">Find your favourite smart watch.</p>
        <h1 className="title">Our Latest Products</h1>

        <div className="cards">
          {cards.map((card) => (
            <ProductCard data={card} key={uuidv4()} />
          ))}
        </div>

        <button className="view_more_btn">View More</button>
      </div>
      <Toaster />
    </section>
  );
};
