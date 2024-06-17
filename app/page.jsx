"use client";
import { Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import Categories from "@components/Categories";
import Slider from "@components/slider";
import Link from "next/link";
import { useEffect, useState } from "react";

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/assets/images/login.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[100%]"
  />,
  <img
    src="/assets/images/login.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[100%]"
  />,
  <img
    src="/assets/images/login.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[100%]"
  />,
  <img
    src="/assets/images/login.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[100%]"
  />,
  <img
    src="/assets/images/login.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[100%]"
  />,
  <img
    src="/assets/images/login.png"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[100%]"
  />,
];

const Gallery = () => <AliceCarousel mouseTracking items={items} />;

const page = () => {
  let val = {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
      itemsFit: "fit",
    },
  };
  useEffect(() => {}, []);
  return (
    <section className="w-[80%] ml-[10%]">
        <Box className="bg-red-600">
          <Slider/>
        </Box>
    </section>
  );
};

export default page;
