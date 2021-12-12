import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "database",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.Facebook_CLIENT_ID,
      clientSecret: process.env.Facebook_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/login",
  },
  secret: "jYQ+/9RqoBp7jmIqtje6uYtipgDWBa+OlxDh5r9maEY=",
  database: process.env.MONGODB_URL,
});
