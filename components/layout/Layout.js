import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "../sections/CTA";

export default function Layout({ children, backLink, nextLink, nextProjectName }) {
  const isProject = backLink || nextLink;
  return (
    <>
      <Navbar />
      <main className="pt-[74px] border-x-2 border-black max-w-[1440px] mx-auto bg-background-light relative">
        <div className="absolute inset-0 pattern-grid pointer-events-none opacity-20 z-0"></div>
        <div className="relative z-10">
          {children}
        </div>
        <CTA isProject={isProject} nextLink={nextLink} nextProjectName={nextProjectName} />
        <Footer />
      </main>
    </>
  );
}
