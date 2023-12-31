import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { StateContext } from "@/context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "doctorrogers",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-mainBg flex flex-col max-w-6xl mx-auto`}>
        <StateContext>
          <Nav />
          {children}
          <Footer />
        </StateContext>
      </body>
    </html>
  );
}
