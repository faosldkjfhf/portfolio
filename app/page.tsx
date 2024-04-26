"use client";
import "./page.css";
import NavBar from "./navbar/navbar";
import About from "./about/page";
import Projects from "./projects/page";
import Photos from "./photos/page";
import { useState } from "react";

export default function Home(): React.ReactElement {
  const [selected, setSelected] = useState("");
  return (
    <main className="container mx-auto">
      <NavBar setSelected={setSelected} />
      {selected === "about" && <About />}
      {selected === "projects" && <Projects />}
      {selected === "photos" && <Photos />}
    </main>
  );
}
