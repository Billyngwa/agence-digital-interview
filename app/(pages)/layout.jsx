'use client'
import Footer from "@components/Footer";
import Nav from "@components/Nav";

export default function WebLayout({children}) {
    return (
        <>
        <Nav/>
        <section>{children}</section>
        <Footer/>
        </>
    )
  }