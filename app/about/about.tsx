import "./page.css";

interface IProps {
  selected: String;
}

export default function About(props: IProps): React.ReactElement {
  return (
    <main
      className={`${
        props.selected === "about"
          ? "about-center about-slide-in"
          : "about-center about-slide-off"
      }`}
    >
      <div>About</div>
    </main>
  );
}
