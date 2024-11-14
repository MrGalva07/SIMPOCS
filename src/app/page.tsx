'use client'
import Link from "next/link";
import Image from "next/image";
import telaInicial from "@/app/assets/images/telaInicial.png"


export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-green-200">
        <div>
          <Link href={"/login"}>
          <button>
            <Image src={telaInicial}  alt="tela-inicial" />
          </button>
          </Link>
          </div>
      </div>
    </main>
  );
}
