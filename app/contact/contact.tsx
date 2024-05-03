"use client";
import "./page.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { useRef, Dispatch, SetStateAction, useEffect } from "react";
import { useScroll, useInView } from "framer-motion";

interface IProps {
  setSelected: Dispatch<SetStateAction<string>>;
  useParallax: any;
}

export default function Contact(props: IProps): React.ReactElement {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = props.useParallax(scrollYProgress, 300);
  const isInView = useInView(ref, { amount: "all" });
  useEffect(() => {
    props.setSelected("contact");
  }, [isInView]);
  return (
    <section id="contact">
      <div className={`about-center card mb-12`} ref={ref}>
        <div className="block w-4/5 text-3xl text-center">
          <div className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            liu[dot]kevi[at]northeastern[dot]edu
          </div>
          <div className="mb-2">
            <Link href="https://www.linkedin.com/in/kliu0932/">
              <FontAwesomeIcon icon={faLinkedin} /> kliu0932
            </Link>
          </div>
          <div>
            <Link href="https://github.com/faosldkjfhf">
              <FontAwesomeIcon icon={faGithubSquare} /> faosldkjfhf
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
