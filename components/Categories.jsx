"use client"
import { AppContext } from "@context";
import { Card } from "@material-tailwind/react";
import { requests } from "@services/api-requests";
import { useContext, useEffect, useState } from "react";

// const export

const Categories = () => {
 const {setSelectedCat} = useContext(AppContext)

    const [allCategories, setAllCategories] = useState([]);
    const [searchedCategory, setSearchedCategory] = useState("");
    const [specificCategory, setSpecificCategory] = useState([]);

    useEffect(()=> {
      const productCategories = async () => {
          const response = await fetch('https://dummyjson.com/products/category-list');
          const specificCategory = await fetch(`https://dummyjson.com/products/category/${searchedCategory}`)
          const specificData =  await specificCategory.json();
          console.log("specific data", specificData);
          const data = await response.json();
          setAllCategories(data)
          setSpecificCategory(specificData)
          setSelectedCat(specificData.products)
          console.log(data);
          return data
      }
      productCategories()
  },[searchedCategory])

    // console.log(allCategories);
  return (
    <section>
    <form>
      <select name="category" id="category" onChange={(e) => {
        setSearchedCategory(e.target.value)
        console.log(searchedCategory);
      }}>
        <option value="select" disabled selected hidden>Category</option>
        {
          allCategories?.map((category) => {
            return (
              <option value={category} key={category}>{category}</option>
            )
          })
        }
      </select>
    
  </form>
  </section>
  )
}

export default Categories