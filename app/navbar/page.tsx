"use client";
import Link from "next/link";
import "./page.css";
import { useState } from "react";

export default function NavBar(): React.ReactElement {
  const [defaultPos, setDefaultPos] = useState(true);
  return (
    <div className={`${defaultPos ? "center" : "top"}`}>
      <div
        className="text-[8rem] leading-[8rem] font-bold button cursor-pointer border-b-2"
        onClick={() => {
          setDefaultPos(true);
        }}
      >
        Kevin Liu
      </div>
      <nav className="mt-3 text-2xl flex-row space-x-5 justify-start">
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
  );
}
