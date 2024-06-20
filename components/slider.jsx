"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { requests } from "@services/api-requests";
import { useEffect, useState } from "react";

const Slider = () => {
  const [tops, setTops] = useState([]);
  const fetchTop = async () => {
    try {
      const response = await requests.getSpecificCategory("tops");
      setTops(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTop();
  }, []);
  return (
    <Carousel
      className="rounded-xl h-[500px]"
      autoplay
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {tops.map((top) => {
        return (
          <div key={top.id}>
          
            <img
              src={top.images[0]}
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
