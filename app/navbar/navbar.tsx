"use client";
import "./page.css";
import { useState, Dispatch, SetStateAction } from "react";

interface IProps {
  selected: String;
  setSelected: Dispatch<SetStateAction<string>>;
}

function NavBar(props: IProps): React.ReactElement {
  const [defaultPos, setDefaultPos] = useState(true);
  return (
    <div className={`${defaultPos ? "center" : "top"}`}>
      <div
        className={`text-[8rem] leading-[8rem] font-bold button cursor-pointer ${
          props.selected === "home" ? "border-b-2" : ""
        }`}
        onClick={() => {
          setDefaultPos(true);
          props.setSelected("home");
        }}
      >
        Kevin Liu
      </div>
      <nav className="mt-3 text-2xl flex-row space-x-5 justify-start">
        <div
          className={`button cursor-pointer ${
            props.selected === "about" ? "border-b-2" : ""
          }`}
          onClick={() => {
            setDefaultPos(false);
            props.setSelected("about");
          }}
        >
          About
        </div>
        <div
          className={`button cursor-pointer ${
            props.selected === "projects" ? "border-b-2" : ""
          }`}
          onClick={() => {
            setDefaultPos(false);
            props.setSelected("projects");
          }}
        >
          Projects
        </div>
        <div
          className={`button cursor-pointer ${
            props.selected === "photos" ? "border-b-2" : ""
          }`}
          onClick={() => {
            setDefaultPos(false);
            props.setSelected("photos");
          }}
        >
          Photos
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
