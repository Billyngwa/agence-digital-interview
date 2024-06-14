"use client";
import "@styles/style.css"
import {
  FormControl,
  Box,
  HStack,
  Button
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

const Signin = () => {
    const [user,setUser] = useState({
     
        email: '',
        password: '',
   
     })

    const signIn = () => {

    }
  return (
    <section className="block md:flex gap-[7rem] w-[70%] ml-[15%] items-center pt-[8rem]">
        <Box className="shadow-2xl ">
            <img src="/assets/images/login.png" alt="" className="rounded-xl" width={600} height={600} />
        </Box>
        <Box className="w-[60%]" >
            <h1 className="text-2xl font-bold sm:pt-[2rem] ">Login to Exclusive sales</h1>
            <h6 className="text-lg font-bold py-[1rem]">Enter your details below</h6>
            <FormControl>
                <Box className="py-[.9rem] w-[80%]">
                    <input className="border-none outline-none auth w-[80%]" type="email" name="email" placeholder=" Email" required onChange={(e) => {

                    }}/>
                </Box>
                <Box  className="py-[1.5rem] w-[80%]">
                    <input className="outline-none auth w-[80%]" type="password" placeholder=" Password" name="password" required onChange={(e) => {

                    }}/>
                </Box>
                <HStack spacing={40}>
                    <button type="button" className="button" onClick={signIn()}>Sign In</button>
                    <Link href="/forgot-password" className="text-red-700">Forgot password?</Link>
                </HStack>
                <Box className="py-3">
                    Don't have account? <Link href="/sign-up"><span className="text-red-700 ml-2">Create Account</span></Link>
                </Box>
            </FormControl>
        </Box>

    </section>
  );
};

export default Signin;
