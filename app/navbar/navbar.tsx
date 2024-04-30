"use client";
import "./page.css";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  selected: String;
  setSelected: Dispatch<SetStateAction<string>>;
}

function NavBar(props: IProps): React.ReactElement {
  return (
    <div className={`${props.selected === "home" ? "center" : "top"}`}>
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
      <nav className="mt-3 text-2xl flex-row space-x-5 justify-start">
        <div
          className={`button cursor-pointer ${
            props.selected === "about" ? "border-b-2" : ""
          }`}
          onClick={() => {
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
            props.setSelected("photos");
          }}
        >
          Photos
        </div>
        <div
          className={`button cursor-pointer ${
            props.selected === "contact" ? "border-b-2" : ""
          }`}
          onClick={() => {
            props.setSelected("contact");
          }}
        >
          Contact
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
