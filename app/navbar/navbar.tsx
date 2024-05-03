"use client";
import "./page.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import categories from "./header.json";

interface IProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

function NavBar(props: IProps): React.ReactElement {
  const [id, setId] = useState("home");
  const scrollToHash = (element_id: string): void => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToHash(id);
  }, [id]);

  return (
    <div
      className={`${props.selected === "home" ? "center" : "top fixed"} z-10`}
    >
      <div
        className={`text-[8rem] leading-[8rem] font-bold button cursor-pointer ${
          props.selected === "home" ? "border-b-2" : ""
        }`}
        onClick={() => {
          setId("home");
          props.setSelected("home");
        }}
      >
        KEVIN LIU
      </div>
      <nav className="flex-row justify-start mt-3 space-x-5 text-2xl test">
        {categories.map((cg) => (
          <div
            key={cg._id}
            className={`button cursor-pointer ${
              props.selected === cg.selected ? "border-b-2" : ""
            }`}
            onClick={() => {
              if (props.selected === "home") {
                props.setSelected(cg.selected);
                setId(cg.selected);
              }
              setId(cg.selected);
              scrollToHash(cg.selected);
            }}
          >
            {cg.text}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
