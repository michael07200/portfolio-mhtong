import type { NextPage } from "next";

import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory z-0 overflow-scroll">
      {" "}
      <Head>
        <title>Michael Tong Portfolio</title>
      </Head>
      <section className="bg-[#62973D]">
        <Header />
      </section>
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      {/* <section id="skill" className="snap-center"></section> */}
      <section id="project" className="snap-center">
        <Project />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
