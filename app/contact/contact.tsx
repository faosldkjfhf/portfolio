import "./page.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Contact(): React.ReactElement {
  return (
    <main className={`about-center about-slide-in`}>
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
    </main>
  );
}
