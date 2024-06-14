import { Box, HStack, ListItem, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const categories = () => {
  const [allCategories, setAllCategories] = useState([])
}

const page = () => {
  useEffect(()=> {

  },[])
  const categories = [
    "Women's Fasion",
     "Men's Fasion",
     "Electronics",
     "Home and Lifestyle",
     "Medicine",
     "Sports and outdoor",
     "Babies and Toys",
     "Groceries and Pets",
     "Health and Beauty"
  ]
  return (
      <section className='w-[80%] ml-[10%]'>
        <HStack spacing={30}>
            <Box>
              <UnorderedList>
                {
                  categories.map((category,index) => {
                    return(
                      <ListItem key={index}>
                          <button type='button'>{category}</button>
                      </ListItem>
                    )
                  })
                }
              </UnorderedList>
            </Box>

        </HStack>
      </section>
  )
}

export default page