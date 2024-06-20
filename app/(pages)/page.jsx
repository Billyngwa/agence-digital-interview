"use client";
import Categories from "@components/Categories";
import TodaysSales from "@components/TodaysSales";
import Slider from "@components/slider";
import { Card } from "@material-tailwind/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import "@styles/style.css";
import { category } from "@services/category";

const TrendingCategory = () => {
  return (
    <section className="shadow-none flex gap-[30px]">
      {category.map((category) => {
        return (
          <Card
            className="shadow-none p-4 hover:bg-red-600 trendingCat "
            key={category.title}
          >
            <Link href={category.path}>
              <span>{category.svg}</span>
              <h1 className="text-black">{category.title}</h1>
            </Link>
          </Card>
        );
      })}
    </section>
  );
};

const page = () => {
  useEffect(() => {}, []);
  return (
    <section className="w-[80%] ml-[10%] shadow-none">
      <section className="flex gap-[40px]">
     
        <Slider />
      </section>
     
      <TodaysSales categorie={"mens-shoes"} />
      <section>
        <div className="shadow-none flex items-center gap-[20px]">
          <span className="bg-red-600 h-9 w-1"></span>
          <h4 className="text-red-600">Categories</h4>
        </div>
        <h1 className="text-black text-2xl text-bolder">
          Browse By trending Category
        </h1>
        <TrendingCategory />
      </section>
    </section>
  );
};

export default page;
