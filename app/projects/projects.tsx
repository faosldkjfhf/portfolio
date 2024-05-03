"use client";
import { useScroll, useInView } from "framer-motion";
import { useRef, useEffect, Dispatch, SetStateAction } from "react";

interface IProps {
  setSelected: Dispatch<SetStateAction<string>>;
  useParallax: any;
}

export default function Projects(props: IProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = props.useParallax(scrollYProgress, 300);
  const isInView = useInView(ref, { amount: "all" });
  useEffect(() => {
    props.setSelected("projects");
  }, [isInView]);
  return (
    <section id="projects">
      <div className="about-center card" ref={ref}>
        <div>Projects</div>
      </div>
    </section>
  );
}
