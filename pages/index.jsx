import Image from "next/image";
import { Inter } from "next/font/google";
import { FaAngleDoubleDown } from "react-icons/fa";
import Nav from "@/components/Nav";
import { useEffect, useRef, useState } from "react";
import { onView } from "@/tools/onView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clicked, setClicked] = useState(false);

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
        <div className="h-full w-full relative">
          

          <div
            ref={ref}
            className={`h-4 w-4 absolute transition-all duration-[2000ms] m-10 shadow-2xl shadow-red-500 top-30 left-20 ${
              clicked && "scale-[5]"
            } -z-10 rounded-full bg-gray-100`}
            onClick={() => setClicked(!clicked)}
          ></div>
          <div
            ref={ref}
            className={`h-4 w-4 absolute transition-all duration-[2000ms] m-10 shadow-2xl shadow-red-500 top-0 left-30 ${
              clicked && "scale-[5]"
            } -z-10 rounded-full bg-gray-100`}
            onClick={() => setClicked(!clicked)}
          ></div>
          <div
            ref={ref}
            className={`h-4 w-4 absolute transition-all duration-[2000ms] m-10 shadow-2xl shadow-red-500 top-20 left-40 ${
              clicked && "scale-[5]"
            } -z-10 rounded-full bg-gray-100`}
            onClick={() => setClicked(!clicked)}
          ></div>

          <div
            ref={ref}
            className={`h-4 w-4 absolute transition-all duration-[2000ms] shadow-2xl shadow-red-500 m-10 top-60 right-20 ${
              clicked && "scale-[5]"
            } -z-10 rounded-full bg-gray-100`}
            onClick={() => setClicked(!clicked)}
          ></div>
          <div
            ref={ref}
            className={`h-4 w-4 absolute transition-all duration-[2000ms] shadow-2xl shadow-red-500 m-10 top-80 left-10 ${
              clicked && "scale-[5]"
            } -z-10 rounded-full bg-gray-100`}
            onClick={() => setClicked(!clicked)}
          ></div>
          <div
            ref={ref}
            className={`h-4 w-4 absolute transition-all duration-[2000ms] shadow-2xl shadow-red-500 m-10 top-96 right-20 ${
              clicked && "scale-[5]"
            } -z-10 rounded-full bg-gray-100`}
            onClick={() => setClicked(!clicked)}
          ></div>
        </div>
      </main>
    </>
  );
}
