import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        if (!credentials) {
          return null; 
        }

       
        if (
          credentials.email === "anamaria@gmail.com" &&
          credentials.password === "123"
        ) {
          return {
            id: "1",
            name: "Ana Maria",
            email: "anamaria@gmail.com",
          }; // Retorna um objeto compatível com o tipo esperado de usuário
        }

        // Retorno explícito para casos não autenticados
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
