"use client"
import React, { useEffect, useState } from 'react'
useState
useEffect
const MensShoes = () => {
        const  [shoes,setShoes] = useState([])
        useEffect(() => {
          const callShowCategory = async () => {
            const response = await fetch(`https://dummyjson.com/products/category/${catName}`);
            const data = await response.json();
            setShoes(data)
            callShowCategory()
          }
        },[])
        return(
          <section className="flex">
            <h1>yo</h1>
            {
              
              shoes.map((shoe) => {
                console.log("shoe:", shoe)
                return (
                  <Card className="shadow-none" key={shoe.id}>
                    <div className="flex gap-[80px] items-center">
                      <span className="bg-red-600 rounded text-white p-3">
                        -{shoe.discountPercentage}%
                      </span>
                    </div>
                    <div className="image">
                      <img src={shoe.images[0]} alt="" />
                    </div>
                    <div>
                      <h1 className="text-black text-xl bold">{shoe.title}</h1>
                      <h2 className="text-red-600 text-lg">${shoe.price}</h2>
                    </div>
                  </Card>
                );
              })
            }
          </section>
        )
      
    }
export default MensShoes