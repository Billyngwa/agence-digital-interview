"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@context";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Product", "Price", "Quantity", "Sub total"];

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  useEffect(() => {
    const pa = () => {
      const locaLokito = JSON.parse(localStorage.getItem("Cart"));
      setCartItems(locaLokito);
      let arr = [];
      let disArr = [];
      locaLokito?.map((cartEle) => {
        const total = cartEle.item.price * cartEle.qty;
        const discount = cartEle.item.discountPercentage;
        arr.push(total);
        disArr.push(discount);
        return arr;
      });
      const big = arr.reduce((start, tot) => start + tot, 0);
      const bigDis = disArr.reduce((start, tot) => start + tot, 0);
      setCartTotal(big);
      setCartDiscount(bigDis);
    };
    pa();
  }, []);
  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
                cartTotal == 0 && <h1>Cart is empty</h1>
            }
            {cartItems?.map((name, index) => {
              const isLast = index === cartItems.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name.item?.id}>
                  <td className={classes}>
                    <img
                      className=" rounded h-[100px]"
                      src={name.item?.images[0]}
                      alt="nature image"
                    ></img>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${name.item?.price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name.qty}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      ${name.item.price * name.qty}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      {
        cartTotal>0 && <Card className="my-[40px] shadow-none relative left-[70%]">
        <h1 className="text-black text-xl font-bold">Cart Total</h1>
        <div className="flex gap-[2rem] ">
          <span className="text-black font-bold">sub total</span>
          <span className="text-black font-bold">${cartTotal}</span>
        </div>
        <div className="flex  gap-[2rem]">
          <span className="text-black font-bold">Grand total</span>
        </div>
        <button
          type="button"
          className="text-white rounded p-1 w-[20%] mt-2 text-[17px] font-normal bg-red-600"
        >
          Process to Checkout
        </button>
      </Card>
      }
      
    </div>
  );
};

export default Cart;
