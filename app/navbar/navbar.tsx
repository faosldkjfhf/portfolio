"use client";
import "./page.css";
import { Dispatch, SetStateAction } from "react";
import categories from "./header.json";

interface IProps {
  selected: String;
  setSelected: Dispatch<SetStateAction<string>>;
}

function NavBar(props: IProps): React.ReactElement {
  return (
    <div
      className={`${props.selected === "home" ? "center" : "top fixed"} z-10`}
    >
      <div
        className={`text-[8rem] leading-[8rem] font-bold button cursor-pointer ${
          props.selected === "home" ? "border-b-2" : ""
        }`}
        onClick={() => {
          props.setSelected("home");
        }}
      >
        Kevin Liu
      </div>
      <nav className="flex-row justify-start mt-3 space-x-5 text-2xl test">
        {categories.map((cg) => (
          <div
            key={cg._id}
            className={`button cursor-pointer ${
              props.selected === cg.selected ? "border-b-2" : ""
            }`}
            onClick={() => {
              props.setSelected(cg.selected);
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
