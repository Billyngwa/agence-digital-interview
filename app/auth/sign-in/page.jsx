"use client";
import "@styles/style.css"
import { useState } from "react";
import Link from "next/link";
import { Card } from "@material-tailwind/react";

const Signin = () => {
    const [user,setUser] = useState({
     
        email: '',
        password: '',
   
     })

    const signIn = async  () => {
       const response =  fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              user: user.email,
              password: user.password,
              expiresInMins: 30, // optional, defaults to 60
            })
          })
          console.log(response);
    }
  return (
    <section className="block md:flex gap-[7rem] w-[70%] ml-[15%] items-center pt-[8rem]">
        <card className="shadow-2xl ">
            <img src="/assets/images/login.png" alt="" className="rounded-xl" width={600} height={600} />
        </card>
        <Card className="w-[60%]" >
            <h1 className="text-2xl font-bold sm:pt-[2rem] ">Login to Exclusive sales</h1>
            <h6 className="text-lg font-bold py-[1rem]">Enter your details below</h6>
            <form>
                <Card className="py-[.9rem] w-[80%]">
                    <input className="border-none outline-none auth w-[80%]" type="email" name="email" placeholder=" Email" required onChange={(e) => {

                    }}/>
                </Card>
                <Card  className="py-[1.5rem] w-[80%]">
                    <input className="outline-none auth w-[80%]" type="password" placeholder=" Password" name="password" required onChange={(e) => {

                    }}/>
                </Card>
                <div className="flex gap-[40px]">
                    <button type="button" className="button" onClick={signIn()}>Sign In</button>
                    <Link href="/forgot-password" className="text-red-700">Forgot password?</Link>
                </div>
                <Card className="py-3">
                    Don't have account? <Link href="/auth/sign-up"><span className="text-red-700 ml-2">Create Account</span></Link>
                </Card>
            </form>
        </Card>

    </section>
  );
};

export default Signin;
