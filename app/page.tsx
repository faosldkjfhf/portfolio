"use client";
import "./page.css";
import NavBar from "./navbar/page";

export default function Home(): React.ReactElement {
  return (
    <main className="container mx-auto">
      <NavBar />
      <div className="item">Hello</div>
    </main>
  );
}
