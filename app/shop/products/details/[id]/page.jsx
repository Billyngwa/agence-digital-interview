"use client";

import { Carousel } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { Rating } from "@material-tailwind/react";
import { AppContext } from "@context";

const Details = () => {
  const params = useParams();
  const id = params.id;
  const [details, setDetails] = useState([]);
  const { setCart } = useContext(AppContext);

  const [cartVal, setCartVal] = useState({});
  let [quantity, setQuantity] = useState(0);

  const addTocartVal = (product) => {
    let productObject = {};
    let arr =[]
    productObject["item"] = product;
    productObject = { ...productObject, item: product, qty: quantity };
    setCartVal(productObject);
    setCart(arr.push(productObject));
    console.log(productObject);
  };
  const addQty = () => {
    console.log(quantity);
    let qty = quantity + 1;
    setQuantity(qty);
  };
  const reeduceQty = () => {
    let qty = quantity - 1;
    qty < 1 ? 1 : setQuantity(qty);
  };
  useEffect(() => {
    const callDetail = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log("shoes", data);
      setDetails(data);
      setQuantity(data.minimumOrderQuantity);
      console.log(quantity);
    };
    callDetail();
  }, []);
  console.log(quantity);
  return (
    <section className="flex gap-[40px] items-center text-[30px] font-bold w-[80%] ml-[10%]">
      <div>
        {details.images?.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={image}
                alt="image 1"
                className=" w-full object-contain h-[130px] "
                height={10}
                width={10}
              />
            </div>
          );
        })}
      </div>
      <Carousel
        className="rounded-xl"
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
        {details.images?.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={image}
                alt="image 1"
                className="  object-contain h-[600px] w-[500px] "
                height={10}
                width={10}
              />
            </div>
          );
        })}
      </Carousel>
      <div>
        <h1 className="text-black">{details.title}</h1>
        <div className="flex gap-[10px] items-center">
          <Rating value={details.rating} readonly />
          <span className="text-black text-[13px] font-normal">
            ({details.reviews?.length} reveiews)
          </span>
          <span className="text-green text-[14px] text-green-300">
            {details.availabilityStatus}
          </span>
        </div>
        <div className="flex items-center justify-between my-2">
          <h1 className="text-black text-[17px] font-bold">
            ${details.price}{" "}
          </h1>

          <span className="text-white rounded p-1 text-[17px] font-normal bg-red-600">
            {details.warrantyInformation}{" "}
          </span>
        </div>
        <p className="text-black text-[17px] font-normal border-b-2 border-blue-gray-200 pb-6">
          {details.description}{" "}
        </p>
        <div className="flex items-center gap-[40px]">
          <div className="flex items-center gap-[30px]">
            <button type="button" onClick={() => reeduceQty()}>
              -
            </button>
            <span className="text-white rounded p-1 text-[17px] font-normal bg-red-600">
              {quantity}
            </span>
            <button onClick={() => addQty()} type="button">
              +
            </button>
          </div>
          <button
            type="button"
            className="text-white rounded p-1 text-[17px] font-normal bg-red-600"
            onClick={() => addTocartVal(details)}
          >
            Purchase
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
