import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { useParallax } from "react-scroll-parallax";

interface IProps {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function About(props: IProps): React.ReactElement {
  const parallax = useParallax<HTMLDivElement>({
    onEnter: () => {
      props.setSelected("about");
    },
  });
  return (
    <main className={`about-center about-slide-in top-1/2`} ref={parallax.ref}>
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
    </main>
  );
}
