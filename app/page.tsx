import Image from "next/image";
import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="center">
        <div className="text-8xl/10 font-bold">Kevin Liu</div>
        <nav className="flex-row mt-10 space-x-5">
          <Link href="/">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Photos</Link>
        </nav>
      </div>
    </main>
  );
}
