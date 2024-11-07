'use client'
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-green-200">
        <div>
          <h1>Tela inicial</h1>
          <Link href={"/login"}>
          <button>clica</button>
          </Link>
          </div>
      </div>
    </main>
  );
}
