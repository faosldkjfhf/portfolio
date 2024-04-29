import "./page.css";
import Link from "next/link";

interface IProps {
  selected: String;
}

export default function About(props: IProps): React.ReactElement {
  return (
    <main className={`about-center about-slide-in`}>
      <div className="block text-center w-4/5">
        <div className="text-3xl">
          Hi, I am <span className="font-semibold">Kevin Liu</span>
        </div>
        <div className="text-xl text-pretty">
          I am currently a third year Computer Science and Game Development
          major at Northeastern University, graduating in December 2024. I plan
          on
        </div>
        <div className="text-3xl font-semibold">Contact Me</div>
        <div className="text-2xl">liu[dot]kevi[at]northeastern[dot]edu</div>
        <Link className="text-2xl" href="https://www.linkedin.com/in/kliu0932/">
          LinkedIn
        </Link>
        <div className="text-2xl"></div>
      </div>
    </main>
  );
}
