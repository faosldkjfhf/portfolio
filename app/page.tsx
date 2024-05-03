"use client";
import "./page.css";
import NavBar from "./navbar/navbar";
import About from "./about/about";
import Projects from "./projects/projects";
import Photos from "./photos/photos";
import { useState } from "react";
import Contact from "./contact/contact";
import { useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home(): React.ReactElement {
  const [selected, setSelected] = useState("home");
  return (
    <div className="container mx-auto">
      <NavBar selected={selected} setSelected={setSelected} />
      {selected !== "home" && (
        <div>
          <div className="spacer" />
          <div className="scroll-grid">
            <div id="about">
              <About setSelected={setSelected} useParallax={useParallax} />
            </div>
            <div id="projects">
              <Projects setSelected={setSelected} useParallax={useParallax} />
            </div>
            <div id="photos">
              <Photos setSelected={setSelected} useParallax={useParallax} />
            </div>
            <div id="contact">
              <Contact setSelected={setSelected} useParallax={useParallax} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
