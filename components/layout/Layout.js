import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-[74px] border-x-2 border-black max-w-[1440px] mx-auto bg-background-light relative">
        <div className="absolute inset-0 pattern-grid pointer-events-none opacity-20 z-0"></div>
        {children}
        <Footer />
      </main>
    </>
  );
}
