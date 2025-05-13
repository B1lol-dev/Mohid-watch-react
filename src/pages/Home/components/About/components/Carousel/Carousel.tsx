// hooks
import { useEffect, useRef, useState } from "react";

// utils
import axios from "axios";
import { textGenerator } from "../../../../../../utils/textGenerator";

// style
import "./Carousel.css";

export const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (
      document.querySelector(
        ".carousel_control button:first-child"
      ) as HTMLButtonElement
    ).style.background = "var(--bg-sc)";
  }, []);

  return (
    <div className="carousel_wrapper">
      <div className="carousel" id="carousel" ref={carouselRef}>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <CarouselItem key={index} />
          ))}
      </div>
      <div className="carousel_control">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                if (carouselRef.current) {
                  const scrollAmount =
                    carouselRef.current.getBoundingClientRect().width + 5;
                  carouselRef.current.scrollTo({
                    left: scrollAmount * index,
                    behavior: "smooth",
                  });
                }

                const buttons = document.querySelectorAll(
                  ".carousel_control button"
                ) as NodeList;

                buttons.forEach((button) => {
                  (button as HTMLButtonElement).style.backgroundColor = "";
                });
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "var(--bg-sc)";
              }}
            ></button>
          ))}
      </div>
    </div>
  );
};

function CarouselItem() {
  return (
    <div className="carousel_item">
      <CarouselCard />
      <CarouselCard />
    </div>
  );
}

interface IUser {
  name: {
    first: string;
    last: string;
  };
}

function CarouselCard() {
  const [info, setInfo] = useState<IUser>();

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/`)
      .then((res) => {
        setInfo(res.data.results[0]);

        if (res.status !== 200) {
          throw new Error();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="carousel_card">
      <div className="carousel_img">
        <img
          src={`https://randomuser.me/api/portraits/men/${Math.round(
            Math.random() * 100
          )}.jpg`}
          alt={info?.name.first}
          height={179}
          width={162}
        />
      </div>

      <div className="carousel_text">
        <h1>
          {info?.name.first} {info?.name.last}
        </h1>
        <p>{textGenerator(10)}</p>

        <div className="stars">★★★★★</div>
      </div>
    </div>
  );
}
