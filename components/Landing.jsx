import Link from "next/link";
import { FaAngleDoubleDown } from "react-icons/fa";

function Landing({ scroll }) {
  return (
    <section className="py-80">
      <div className="flex flex-col space-y-8 items-center justify-center">
        <h1 className="font-extrabold text-8xl text-white">
          <span className="text-blue-100">Shop</span>
          <span className="text-pink-100">Land</span>
          <span className="text-xl m-0">&#8482;</span>
        </h1>
        <Link href="/articles">
          <button className="py-8 px-10 rounded-md hover:bg-blue-500 bg-blue-400 transition-all duration-500 active:scale-95 active:text-pink-200 text-white w-80 text-3xl">
            Explore
          </button>
        </Link>

        <button onClick={scroll} className="absolute bottom-8 h-8 mx-auto">
          <FaAngleDoubleDown className="animate-bounce p-0 m-0 text-white text-center text-xl" />
        </button>
      </div>
    </section>
  );
}

export default Landing;
