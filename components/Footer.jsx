'use client'
import { Card, Input } from "@material-tailwind/react";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  
  return (
    <section className="bg-black  py-[3rem] mt-[2.5rem]">
      <div className="w-[80%] ml-[10%] flex gap-[50px]">
        <div >
          <h1 className="text-white text-bolder text-2xl">Exclusive</h1>
          <h5 className="text-white text-bold py-[1.5rem]">Subscribe</h5>
          <span className="text-white text-bold">Get 10% off your first order</span>
          <div className="py-3 px-7 flex mt-3 border border-white rounded">
            <input
              type="email"
              name="newsLetterEmail"
              className="border-none bg-transparent outline-none text-white placeholder:text-gray-500 "
              placeholder="Enter your email"
            />
            <img src="/assets/images/telegram.png" alt=""  />
          </div>
        </div>
        <ul>
          <div className="flex gap-[50px] text-white align-start pb-[6rem]">
            <li>
              <h1 className="text-white text-bold text-2xl">Support</h1>
              <ul>
                <li>
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </li>
            <li>
              <h1  className="text-white text-bold text-2xl">Account</h1>
              <ul>
                <li>
                  <Link href="/profile">My Account</Link>
                </li>
                <li>
                  <Link href="/sign-in">Login/Register</Link>
                </li>
                <li>
                  <Link href="/profile">Car</Link>
                </li>
                <li>
                  <Link href="/profile">Wish List</Link>
                </li>
                <li>
                  <Link href="/profile">Shop</Link>
                </li>
              </ul>
            </li>
            <li>
              <h1  className="text-white text-bold text-2xl">Quick Links</h1>
              <ul>
                <li>
                  <Link href="/profile">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/sign-in">Terms of use</Link>
                </li>
                <li>
                  <Link href="/profile">FAQ</Link>
                </li>
                <li>
                  <Link href="/profile">Contact</Link>
                </li>
              </ul>
            </li>
            <li></li>
          </div>
        </ul>
      </div>
      <hr className="w-full h-3 "/>
      <span className="text-center">Copyright Exclusive {date}. All right reserved</span>
    </section>
  );
};

export default Footer;
