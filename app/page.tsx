"use client";
import "./page.css";
import NavBar from "./navbar/navbar";
import About from "./about/about";
import Projects from "./projects/projects";
import Photos from "./photos/photos";
import { useState } from "react";
import Contact from "./contact/contact";
import { useParallax } from "react-scroll-parallax";

export default function Home(): React.ReactElement {
  const [selected, setSelected] = useState("home");
  return (
    <div className="container mx-auto">
      <NavBar selected={selected} setSelected={setSelected} />
      {/* {selected === "about" && <About />}
      {selected === "projects" && <Projects />}
      {selected === "photos" && <Photos />}
      {selected === "contact" && <Contact />} */}
      <div className="spacer" />
      <About setSelected={setSelected} />
      <Projects />
      <Photos />
      <Contact />
    </div>
  );
}
