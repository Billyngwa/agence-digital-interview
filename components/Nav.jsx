"use client";
import { Card, Input, ListItem } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const Nav = () => {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Sign Up",
      path: "/auth/sign-up",
    },
  ];
  const [cartItems, setCartItems] = useState([]);
  const [checkCart, setCheckCart] = useState(false);
  const locaLokito = JSON.parse(localStorage.getItem("Cart"));
  setInterval(() => {
    setCartItems(JSON.parse(localStorage.getItem("Cart")))
  }, 3000);
  useEffect(() => {
  }, [checkCart]);
 
  return (
    <div className=" flex justify-between pt-[2rem] pb-[1rem] gap-[60px] w-[90%] ml-[5%] border-b-blue-gray-200">
      <div>
        <Link href="/" className="font-bold text-2xl text-black">
          Adence Digital
        </Link>
      </div>
      <nav>
        <ul>
          <div className="flex gap-[30px]">
            {navLinks.map((link) => {
              return (
                <li key={link.path}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
      <Card className="shadow-none">
        <div className="flex justify-between gap-[20px]">
          <Card className="shadow-none">
            <div className="flex gap-[10px]">
              <Categories />
              <Input
                type="text"
                name="search"
                label="What are you looking for?"
                className="text-gray-500"
              />
              <button type="button">
                <svg
                  width="18"
                  height="18"
                  viewCard="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </Card>
          <button type="button">
            <svg
              width="22"
              height="20"
              viewCard="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="relative " >
            {
             
             cartItems?.length > 0 &&    <span className="bg-red-600">2</span>
            }
            <button type="button">
              <Link href="/shop/cart">
                <svg
                  width="32"
                  height="32"
                  viewCard="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H7L10 22H26"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Nav;
