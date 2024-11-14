'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react'
import {signIn} from "next-auth/react"



const LoginForm = () => {
    const searchParams = useSearchParams();

    const error = searchParams.get("error");
  
    async function login(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      signIn("credentials", {
        ...data,
        callbackUrl: "/home",
      });
    }
  return (
    <div className='h-full'>
         <form
          onSubmit={login}
          className="p-10 w-96 max-w-96 h-screen max-h-screen flex flex-col gap-2  "

        >
          <h1 className="text-black roboto-regular self-start text-3xl mb-3">
           Fazer Login
          </h1>
          <div className="flex flex-col gap-4 mb-5">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="email"
                className="text-black roboto-regular text-sm"
              >
                Login
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-lg w-full h-3/4 pt-2 pb-2 text-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-black text-sm roboto-regular"
              >
                Senha
              </label>
              <input
                name="password"
                type="password"
                placeholder="Senha"
                className="input input-lg w-full h-3/4 pt-2 pb-2 text-lg "
              />
            </div>
          </div>

          <button
            className="btn hover:bg-green-500 hover:scale-105  w-full bg-green-600 text-white text-base "
            type="submit"
          >
            Entrar no SIMPOCS&#39;
          </button>
          {error === "CredentialsSign" && (
            <div className="text-red-500">Erro no Login</div>
          )}
            </form>
    </div>
  )
}

export default LoginForm