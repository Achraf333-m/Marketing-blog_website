import Image from "next/image";
import { Inter } from "next/font/google";
import { FaAngleDoubleDown } from "react-icons/fa";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="w-full h-screen ">
        <Nav />
        <div className="flex flex-col space-y-8 items-center h-full justify-center">
          <h1 className="font-extrabold text-8xl text-white">
            ShopLand<span className="text-xl m-0">&#8482;</span>
          </h1>
          <button className="py-8 px-10 rounded-md hover:bg-blue-500 bg-blue-400 transition-all duration-500 active:scale-95 active:text-pink-200 text-white w-80 text-3xl">
            Explore
          </button>

          <div className="absolute bottom-8 h-8 mx-auto">
            <FaAngleDoubleDown className="animate-bounce p-0 m-0 text-white text-center text-xl" />
          </div>
        </div>
        <div className="h-full w-full bg-gray-100"></div>
      </main>
    </>
  );
}
