// icons
import { Heart, ShoppingCart, Star } from "lucide-react";

// hooks
import { useEffect, useState } from "react";

// utils
import { v4 as uuidv4 } from "uuid";
import { CartController } from "../../../../utils/cartController";

// types
interface IProductCardProps {
  id: number;
  thumbnail: string;
  title: string;
  rating: number;
  price: number;
}

// style
import "./ProductCard.css";

// components
import { Toaster, toast } from "react-hot-toast";

const cartController = new CartController();

export const ProductCard = ({ data }: { data: IProductCardProps }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    if (!like) {
      cartController.addProduct(data.id);
      setLike(true);
      toast.success(`Product ${data.title} added to cart`);
    } else {
      cartController.removeProduct(data.id);
      setLike(false);
      toast.success(`Product ${data.title} removed from cart`);
    }
  };

  useEffect(() => {
    const isLiked = cartController.getProduct(data.id).length > 0;
    setLike(isLiked);
  }, [data.id]);

  return (
    <div className="card" title={data.title}>
      <div className="card_img">
        <img src={data.thumbnail} alt={data.title} height={280} width={250} />
        <div className="card_img_items">
          <button className="card_shop">
            <ShoppingCart size={20} fill="white" />
          </button>
          <button className="card_heart" onClick={handleLike}>
            <Heart
              fill={like ? "red" : "white"}
              color={like ? "red" : "white"}
            />
          </button>
        </div>
      </div>

      <div className="card_text">
        <h1>{data.title}</h1>

        <div className="stars">
          {Array(Math.round(data.rating))
            .fill("")
            .map(() => (
              <Star fill="black" size={15} key={uuidv4()} />
            ))}
          {Array(Math.round(5 - data.rating))
            .fill("")
            .map(() => (
              <Star size={15} key={uuidv4()} />
            ))}
        </div>

        <div className="card_price">
          <span id="not_price1" className="not_price">
            ${(data.price * 1.2).toFixed(2)}
          </span>
          <p id="price1" className="price">
            ${data.price}
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
