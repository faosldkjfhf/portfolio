import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";

interface IProps {
  selected: String;
}

export default function About(props: IProps): React.ReactElement {
  return (
    <main className={`about-center about-slide-in`}>
      <div className="block text-center w-4/5">
        <div className="text-3xl">
          Hi, I am{" "}
          <span className="font-semibold">
            Kevin Liu <FontAwesomeIcon icon={faFaceLaugh} />
          </span>
        </div>
        <br />
        <div className="text-xl text-pretty">
          I am currently a third year Computer Science and Game Development
          major at Northeastern University, graduating in December 2024. I plan
          on continuing my Masters in Computer Science through the 4+1 program
          at Northeastern.
        </div>
      </div>
    </main>
  );
}
