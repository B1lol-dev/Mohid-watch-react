// components
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { ProductCard } from "../../components/common/cards/ProductCard/ProductCard";

// style
import "./Cart.css";

// utils
import { CartController } from "../../utils/cartController";
import axios from "axios";

// hooks
import { useState, useEffect } from "react";
import { API_ENDPOINTS, API_URL } from "../../constants/api";

const cartController = new CartController();

interface IProductCard {
  id: number;
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
}

export const Cart = () => {
  const [products, setProducts] = useState<IProductCard[]>([]);

  const cart = cartController.getCart();

  useEffect(() => {
    axios.get(`${API_URL}/${API_ENDPOINTS.mens_watches}`).then((res) => {
      axios.get(`${API_URL}/${API_ENDPOINTS.womens_watches}`).then((_res) => {
        const products = [...res.data.products, ..._res.data.products];

        const filteredProducts = products.filter((product: IProductCard) => {
          const cartProduct = cartController.getProduct(product.id);
          if (Array.isArray(cartProduct) && cartProduct.length !== 0) {
            console.log(cartProduct);
            return true;
          }
          return false;
        });

        setProducts(filteredProducts);
      });
    });
  }, [cart]);

  return (
    <>
      <Header isScrollEnabled={false} />
      <main>
        {cartController.getCart().length !== 0 ? (
          <section className="shop">
            <div className="container">
              <p className="subtitle">The products you want to buy</p>
              <h1 className="title">Cart</h1>
              <div className="cards" id="shop_cards">
                {products.map((product) => (
                  <ProductCard data={product} />
                ))}
              </div>
              <h1 id="shop_total">
                $
                {products
                  .reduce((total, product) => total + product.price, 0)
                  .toString()}
              </h1>
              <button className="shop_buy" id="shop_buy">
                Buy
              </button>
            </div>
          </section>
        ) : (
          <section className="shop_none">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fkanFC71wuYYb27Dc4mnqKkBggQES6FALA&s"
              alt=""
            />
            <h1>Theres nothing in your cart</h1>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};
