"use client";

import { AppContext } from "@context";
import { Card } from "@material-tailwind/react";
import { requests } from "@services/api-requests";
import { useContext, useEffect, useState } from "react";

const SearchedCategory = () => {
  const [category, setCategory] = useState();
  const catchCat = async () => {
    try {
      const cats = await requests.getSpecificCategory("laptops");
      setCategory(cats.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    catchCat;
  }, []);

  return (
    <section className="block">
      <div className="shadow-none flex items-center gap-[20px]">
        <span className="bg-red-600 h-9 w-1"></span>
        <h4 className="text-red-600">Today's</h4>
      </div>
      <h1 className="text-black text-2xl text-bolder">Flash Sales</h1>
      <section className="flex">

      { category && category?.map((cat, index) => {
        return (
          <Card className="shadow-none" key={cat.id}>
            <div className="flex gap-[80px] items-center">
              <span className="bg-red-600 rounded text-white p-3">-{cat.discountPercentage}%</span>
              <button type="button">Like</button>
            </div>
            <div className="image">
              <img src={cat.images[0]} alt="" />
            </div>
            <div>
              <h1 className="text-black text-xl bold">{cat.title}</h1>
              <h2 className="text-red-600 text-lg">${cat.price}</h2>
            </div>
          </Card>
        );
      })}
      </section>
    </section>
  );
};

export default SearchedCategory;
