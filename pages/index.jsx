import Image from "next/image";
import { Inter } from "next/font/google";
import { FaAngleDoubleDown } from "react-icons/fa";
import Nav from "@/components/Nav";
import { useEffect, useRef, useState } from "react";
import { onView } from "@/tools/onView";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const articles = ["article1", "article2", "article3"]

  const ref = useRef(null);
  const isViewed = onView(ref, "0px");

  useEffect(() => {
    if (isViewed) {
      setClicked(true);
    }

    return () => setClicked(false);
  }, [isViewed, clicked]);
  return (
    <>
      <main className="w-full h-screen">
        <Nav />
        <div className="flex flex-col space-y-8 items-center h-full justify-center">
          <h1 className="font-extrabold text-8xl text-white">
            ShopLand<span className="text-xl m-0">&#8482;</span>
          </h1>
          <button className="py-8 px-10 rounded-md hover:bg-blue-500 bg-blue-400 transition-all duration-500 active:scale-95 active:text-pink-200 text-white w-80 text-3xl">
            Explore
          </button>

          <a href="#shop" className="absolute bottom-8 h-8 mx-auto">
            <FaAngleDoubleDown className="animate-bounce p-0 m-0 text-white text-center text-xl" />
          </a>
        </div>
        <div className="h-full w-full flex justify-center items-center relative">
          <div className="w-full h-full bg-gray-100/55"></div>
          {/* <div
            ref={ref}
            id="shop"
            className={`h-1 w-1 text-black text-sm text-center transition-all duration-[2000ms] m-10 shadow-2xl shadow-red-500 ${
              clicked && "scale-x-[100] rounded-sm scale-y-[100]"
            } -z-10 mx-auto bg-gray-100`}
          ></div> */}
        </div>
        <div className="w-full h-full text-white text-xl">
          <Link href="/articles/">click me</Link>
          {articles.map((article) => <Link href="articles/[articleName]" as={`articles/${article}`}>{article}</Link> )}
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-full bg-white"></div>
      </main>
    </>
  );
}


