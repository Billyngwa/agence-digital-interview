"use client"

import { Box, FormControl, ListItem, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Categories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [searchedCategory, setSearchedCategory] = useState("");

    useEffect(()=> {
        const productCategories = async () => {
            const response = await fetch('https://dummyjson.com/products/category-list');
            const specificCategory = await fetch(`https://dummyjson.com/products/category/${searchedCategory}`)
            const specificData =  await specificCategory.json();
            console.log("specific data", specificData);
            const data = await response.json();
            setAllCategories(data)
            console.log(allCategories);
            return data
        }
        productCategories()
    },[searchedCategory])
  return (
    <Box>
    <form>
      <select name="category" id="category" onChange={(e) => {
        setSearchedCategory(e.target.value)
        console.log(searchedCategory);
      }}>
        {/* <option value="select" disabled selected hidden>Category</option> */}
        {
          allCategories.map((category) => {
            return (
              <option value={category} key={category}>{category}</option>
            )
          })
        }
      </select>
    
  </form>
  </Box>
  )
}

export default Categories