import Head from "next/head";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Work from "../components/sections/Work";
import Process from "../components/sections/Process";
import About from "../components/sections/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Panji Saputro | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Hero />
        <Stats />
        <Work />
        <Process />
        <About />
      </Layout>
    </>
  );
}

