import { motion, useScroll, useInView, inView } from "framer-motion";
import "./page.css";
import { useEffect, useRef } from "react";

interface IProps {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  useParallax: any;
}

export default function About(props: IProps): React.ReactElement {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = props.useParallax(scrollYProgress, 300);
  const isInView = useInView(ref, { amount: "all" });
  useEffect(() => {
    props.setSelected("about");
  }, [isInView]);
  return (
    <section id="about">
      <div className={`about-center card`} ref={ref}>
        <div className="block w-4/5 text-center">
          <div className="text-3xl">
            Hi, I am <span className="font-bold">Kevin Liu</span>
          </div>
          <br />
          <div className="text-xl text-pretty">
            <div>
              I am currently a third year Computer Science and Game Development
              major at Northeastern University, graduating in December 2024. I
              plan on continuing my Masters in Computer Science through the 4+1
              program at Northeastern.
            </div>
            <br />
            <div className="w-1/5 p-4 mx-auto transition-all border rounded-md cursor-pointer reverse-color">
              Resume
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
