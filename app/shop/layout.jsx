import Footer from "@components/Footer";
import Nav from "@components/Nav";

export default function ShopLayout({
    children
  }) {
    return (
    <div>
      <Nav/>
        <section>
          {children}
        </section>
      <Footer/>
    </div>
    )}