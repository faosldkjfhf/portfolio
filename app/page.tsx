"use client";
import "./page.css";
import NavBar from "./navbar/navbar";
import About from "./about/about";
import Projects from "./projects/projects";
import Photos from "./photos/photos";
import { useState } from "react";

export default function Home(): React.ReactElement {
  const [selected, setSelected] = useState("home");
  return (
    <main className="container mx-auto">
      <NavBar selected={selected} setSelected={setSelected} />
      {selected === "about" && <About selected={selected} />}
      {selected === "projects" && <Projects />}
      {selected === "photos" && <Photos />}
    </main>
  );
}
