"use client";
import Link from "next/link";
import "./page.css";
import { useState } from "react";

export default function Home(): React.ReactElement {
  const [defaultPos, setDefaultPos] = useState(true);
  return (
    <main className="container mx-auto">
      <div className={`${defaultPos ? "center" : "top"}`}>
        <div
          className="text-[8rem]/10 font-bold button cursor-pointer"
          onClick={() => {
            setDefaultPos(true);
          }}
        >
          Kevin Liu
        </div>
        <nav className="mt-12 font-bold text-2xl flex-row space-x-5 justify-start">
          <Link
            className="button"
            href="/"
            onClick={() => {
              setDefaultPos(false);
            }}
          >
            About
          </Link>
          <Link className="button" href="/">
            Projects
          </Link>
          <Link className="button" href="/">
            Photos
          </Link>
        </nav>
      </div>
    </main>
  );
}
