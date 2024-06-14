"use client";
import "@styles/style.css"
import "@styles/global.css"
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

import { ThemeProvider, Button } from "@material-tailwind/react";
import { Providers } from "./Providers";
import { ChakraProvider } from "@chakra-ui/react";
export const metaData = {
  title: "Agence Digital Interview",
  description: "E-commerce with DummyJson data",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>
            <Nav />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
