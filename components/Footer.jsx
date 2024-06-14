import { Box, HStack } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  
  return (
    <section className="bg-black  py-[3rem] mt-[2.5rem]">
      <HStack className="w-[80%] ml-[10%]" spacing={50}>
        <Box>
          <h1 className="text-white text-bolder text-2xl">Exclusive</h1>
          <h5 className="text-white text-bold py-[1.5rem]">Subscribe</h5>
          <span className="text-white text-bold">Get 10% off your first order</span>
          <HStack className="py-3 px-7 mt-3 border border-white rounded">
            <input
              type="email"
              name="newsLetterEmail"
              className="border-none bg-transparent outline-none text-white placeholder:text-gray-500 "
              placeholder="Enter your email"
            />
            <img src="/assets/images/telegram.png" alt=""  />
          </HStack>
        </Box>
        <UnorderedList>
          <HStack spacing={50} color={"white"} verticalAlign={"start"} paddingBottom={"6rem"}>
            <ListItem>
              <h1 className="text-white text-bold text-2xl">Support</h1>
              <UnorderedList>
                <ListItem>
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </ListItem>
                <ListItem>exclusive@gmail.com</ListItem>
                <ListItem>+88015-88888-9999</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <h1  className="text-white text-bold text-2xl">Account</h1>
              <UnorderedList>
                <ListItem>
                  <Link href="/profile">My Account</Link>
                </ListItem>
                <ListItem>
                  <Link href="/sign-in">Login/Register</Link>
                </ListItem>
                <ListItem>
                  <Link href="/profile">Car</Link>
                </ListItem>
                <ListItem>
                  <Link href="/profile">Wish List</Link>
                </ListItem>
                <ListItem>
                  <Link href="/profile">Shop</Link>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <h1  className="text-white text-bold text-2xl">Quick Links</h1>
              <UnorderedList>
                <ListItem>
                  <Link href="/profile">Privacy Policy</Link>
                </ListItem>
                <ListItem>
                  <Link href="/sign-in">Terms of use</Link>
                </ListItem>
                <ListItem>
                  <Link href="/profile">FAQ</Link>
                </ListItem>
                <ListItem>
                  <Link href="/profile">Contact</Link>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem></ListItem>
          </HStack>
        </UnorderedList>
      </HStack>
      <hr className="w-full h-3 "/>
      <span className="text-center">Copyright Exclusive {date}. All right reserved</span>
    </section>
  );
};

export default Footer;
