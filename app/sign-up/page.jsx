"use client"
import "@styles/style.css"
import {
  FormControl,
  Box,
  HStack,
  Button
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
const SignUp = () => {
    const [user,setUser] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
   
     })

    const signUp = () => {

    }
  return (
    <section className="block md:flex gap-[7rem] w-[70%] ml-[15%] items-center pt-[8rem]">
    <Box className="shadow-2xl ">
        <img src="/assets/images/login.png" alt="" className="rounded-xl" width={600} height={600} />
    </Box>
    <Box className="w-[60%]" >
        <h1 className="text-2xl font-bold sm:pt-[2rem] ">Sign up with Exclusive sales</h1>
        <h6 className="text-lg font-bold py-[1rem]">Enter your details below</h6>
        <FormControl>
        <Box className="py-[.9rem] w-[80%]">
                <input className="border-none outline-none auth w-[80%]" type="text" name="firstName" placeholder=" First Name" required onChange={(e) => {

                }}/>
            </Box>
            <Box  className="py-[1.5rem] w-[80%]">
                <input className="outline-none auth w-[80%]" type="text" name="lastName" placeholder="Last Name" required onChange={(e) => {

                }}/>
            </Box>
            <Box className="py-[.9rem] w-[80%]">
                <input className="border-none outline-none auth w-[80%]" type="email" name="email" placeholder=" Email" required onChange={(e) => {

                }}/>
            </Box>
            <Box  className="py-[1.5rem] w-[80%]">
                <input className="outline-none auth w-[80%]" type="password" name="password" placeholder=" Password" required onChange={(e) => {

                }}/>
            </Box>
            <button type="button" className="w-[65%] p-4 mb-[1rem] border-4">
                <HStack spacing={6} marginLeft={"10%"}>
                    <img src="/assets/images/Icon-Google.png"alt="" />
                    <span>
                        Sign up with Google
                    </span>
                </HStack>
            </button>
           
            <HStack spacing={40}>
                <button type="button" className="button" onClick={signUp()}>Sign Up</button>
                <Box className="py-3">
                    Already have account? <Link href="/sign-in"><span className="text-red-700">Sign In</span></Link>
                </Box>
            </HStack>
        </FormControl>
    </Box>

</section>
  )
}

export default SignUp