"use client";
import "@styles/style.css";
import "@styles/global.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Providers } from "../context/Providers";
import ContextProvider from "@context";
export const metaData = {
  title: "Agence Digital Interview",
  description: "E-commerce with DummyJson data",
};

const RootLayout = ({ children }) => {
  return (
    <ContextProvider>
        <html lang="en">
          <body>
            <main>{children}</main>
          </body>
        </html>
    </ContextProvider>
  );
};

export default RootLayout;
