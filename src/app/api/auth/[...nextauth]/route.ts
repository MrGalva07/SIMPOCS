import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"

const handler = NextAuth({
    pages:{
        signIn: "/"
    },
    providers: [
        CredentialsProvider ({
          
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials){
                return null
            }
            if(
                credentials.email === "anamaria@gmail.com" && 
                credentials.password === "123"
            ){

                return{
                    id:"1",
                    name: "ana maria",
                    email: "anamaria@gmail.com",
                }

            }
          }
        })
      ]
})

export { handler as GET, handler as POST }