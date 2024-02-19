import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
        providers: [
          CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
                name: "Credentials",
                // `credentials` is used to generate a form on the sign in page.
                // You can specify which fields should be submitted, by adding keys to the `credentials` object.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                  username: { label: "Username", type: "text", placeholder: "jsmith" },
                  password: { label: "Password", type: "password" }
                },
                async authorize(credentials, req) {
                  // Add logic here to look up the user from the credentials supplied
                  const res = await fetch("http://localhost:3000/api/auth/login", {
                    method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                        body: JSON.stringify({
                            username: credentials.username,
                            password: credentials.password
                        }),
                    })
                    const user = await res.json()
                  if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                  } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                  }

                }

          })
    ],
    callbacks: {
          async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
              token.accessToken = account.access_token
            }
            return token
          },
          async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
          }
        }

};

export default NextAuth(authOptions);