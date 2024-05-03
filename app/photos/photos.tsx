"use client";
import "./page.css";
import { useScroll, useInView } from "framer-motion";
import { useRef, useEffect, Dispatch, SetStateAction } from "react";

interface IProps {
  setSelected: Dispatch<SetStateAction<string>>;
  useParallax: any;
}

interface IProps {
  setSelected: Dispatch<SetStateAction<string>>;
  useParallax: any;
}

export default function Photos(props: IProps) {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = props.useParallax(scrollYProgress, 300);
  const isInView = useInView(ref, { amount: "all" });
  useEffect(() => {
    props.setSelected("photos");
  }, [isInView]);

  return (
    <section id="photos">
      <div className="about-center card" ref={ref}>
        Photos
      </div>
    </section>
  );
}
