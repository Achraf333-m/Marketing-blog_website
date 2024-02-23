import ArticleLanding from "@/components/ArticleLanding";
import ArticleStyle from "@/components/ArticleStyle";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Nav from "@/components/Nav";
import Link from "next/link";

function index() {
  const articles = ["article1", "article2", "article3", "article4", "article5", "article6", "article7", "article8", "article9"];


  return (
    <>
      <Nav />

      <main className="w-full">
        <ArticleLanding />
        <section className=" text-black">
          <div className="flex justify-center items-center flex-wrap bg-blue-50 pb-36 shadow-2xl shadow-cyan-500 px-6 py-10 w-full">
           {articles.map((article) => <ArticleStyle article={article} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default index;

{
  /* <div>
  {articles.map((article) => {
      <>
      <p>{article}</p>
      <Link href="articles/[articleName]" as={`articles/${article}`}>
        <p>{article}</p>
      </Link>
      </>
    
  })}
</div> */
}
{
  /* <Link href="/articles/1">
          FIRST ARTICLE
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel fuga assumenda deserunt voluptas! Officiis perspiciatis reprehenderit at temporibus repudiandae fuga libero sed aliquam facere, explicabo accusamus ratione ut labore.</p>
      </Link> */
}
