import "./page.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Contact(): React.ReactElement {
  return (
    <main className={`about-center about-slide-in`}>
      <div className="block text-center w-4/5">
        <div className="text-5xl/[3.5rem] font-semibold">Contact Me</div>
        <div className="text-2xl">
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          liu[dot]kevi[at]northeastern[dot]edu
        </div>
        <div className="text-2xl">
          <Link href="https://www.linkedin.com/in/kliu0932/">
            <FontAwesomeIcon icon={faLinkedin} /> kliu0932
          </Link>
        </div>
        <div className="text-2xl">
          <Link href="https://github.com/faosldkjfhf">
            <FontAwesomeIcon icon={faGithubSquare} /> faosldkjfhf
          </Link>
        </div>
      </div>
    </main>
  );
}
