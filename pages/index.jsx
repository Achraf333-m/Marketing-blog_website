import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Featured from "@/components/Featured";
import FavProducts from "@/components/FavProducts";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const articles = ["article1", "article2", "article3"]

  const scroll = () => {
    document.getElementById("shop").scrollIntoView();
  };

  return (
    <>
      <Nav />
      <main className="w-full mb-96">
        <Landing scroll={scroll} />

        <section id="shop" className="w-full space-y-40 py-10">
          <section className="h-[80vh] w-full py-8 px-10">
            <div className="w-full h-full bg-blue-50/90 flex flex-col justify-evenly items-center shadow-2xl shadow-blue-500 rounded-lg px-10 text-black">
              <Featured />
            </div>
          </section>

          <section className="h-[80vh] w-full py-8 px-10">
            <div className="w-full h-full bg-pink-50/90 flex flex-col justify-evenly items-center shadow-2xl shadow-pink-500 rounded-lg px-10 text-black">
              <FavProducts />
            </div>
          </section>

          <section className="flex justify-center items-center">
            <Link href="/articles">
              <button className="py-4 px-5 rounded-md hover:bg-blue-500 bg-blue-400 transition-all duration-500 active:scale-95 active:text-pink-200 text-white w-80 text-3xl">
                See More!
              </button>
            </Link>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

{
  /* <Footer /> */
}
{
  /* <div className="w-full h-full text-white text-xl">
  <Link href="/articles/">click me</Link>
  {articles.map((article) => <Link href="articles/[articleName]" as={`articles/${article}`}>{article}</Link> )}
</div> */
}
