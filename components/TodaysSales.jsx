"use client";

import { AppContext } from "@context";
import { Card } from "@material-tailwind/react";
import { requests } from "@services/api-requests";
import { useContext, useEffect, useState } from "react";
import MensShoes from "./MensShoes";
import Link from "next/link";

const TodaysSales = (props) => {
  const categoryForSales = props.categorie;
  const { selectedCat } = useContext(AppContext);
  const recentproducts = selectedCat;
  console.log(selectedCat);
  const [category, setCategory] = useState();
  const catchCat = async () => {
    try {
      console.log(selectedCat);
      const cats = await requests.getSpecificCategory(selectedCat);
      console.log(cats.data);
      setCategory(cats.data);
    } catch (error) {
      console.error(error);
    }
  };
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const callShowCategory = async () => {
      console.log(categoryForSales);

      const response = await fetch(
        `https://dummyjson.com/products/category/${categoryForSales}`
      );
      const data = await response.json();
      console.log("shoes", data);
      setShoes(data.products);
    };
    catchCat;
    callShowCategory();
  }, [category]);

  return (
    <section className="block">
      <div className="shadow-none flex items-center gap-[20px]">
        <span className="bg-red-600 h-9 w-1"></span>
        <h4 className="text-red-600">Today's</h4>
      </div>
      <h1 className="text-black text-2xl text-bolder">Flash Sales</h1>
      <section className="flex">
        {recentproducts?.length !== undefined ? (
          recentproducts &&
          recentproducts?.map((cat, index) => {
            return (
              <Card className="shadow-none" key={cat.id}>
                <Link href={`/shop/products/details/${cat.id}`}>
                  <div className="flex gap-[80px] items-center">
                    <span className="bg-red-600 rounded text-white p-3">
                      -{cat.discountPercentage}%
                    </span>
                    <button type="button">Like</button>
                  </div>
                  <div className="image">
                    <img src={cat.images[0]} alt="" />
                  </div>
                  <div>
                    <h1 className="text-black text-xl bold">{cat.title}</h1>
                    <h2 className="text-red-600 text-lg">${cat.price}</h2>
                  </div>
                </Link>
              </Card>
            );
          })
        ) : categoryForSales == "" ? (
          <div className="w-[200px] h-[300px] bg-red-600 flex flex-col items-center justify-center">
            <h1>hello world</h1>
          </div>
        ) : (
          <section className="flex">
            {shoes.map((shoe) => {
              console.log("shoe:", shoe);
              return (
                <Card className="shadow-none" key={shoe.id}>
                  <Link href={`/shop/products/details/${shoe.id}`}>
                    <div className="flex gap-[80px] items-center">
                      <span className="bg-red-600 rounded text-white p-3">
                        -{shoe.discountPercentage}%
                      </span>
                      <button type="button">Like</button>
                    </div>
                    <div className="image">
                      <img src={shoe.images[0]} alt="" />
                    </div>
                    <div>
                      <h1 className="text-black text-xl bold">{shoe.title}</h1>
                      <h2 className="text-red-600 text-lg">${shoe.price}</h2>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </section>
        )}
      </section>
    </section>
  );
};

export default TodaysSales;
