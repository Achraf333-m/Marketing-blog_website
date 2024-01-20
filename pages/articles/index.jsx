import Link from "next/link";

function index() {
  const articles = ["article1", "article2", "article3"];
  articles.map((article) =>
    console.log(
      article
    )
  );
  return (
    <div className="text-white text-2xl">
      ARTICLES PAGE {articles.map((article) => <Link href="articles/[articleName]" as={`articles/${article}`}>{article}</Link> )}
      <div>
        {articles.map((article) => {
            <>
            <p>{article}</p>
            <Link href="articles/[articleName]" as={`articles/${article}`}>
              <p>{article}</p>
            </Link>
            </>
          
        })}
      </div>
      {/* <Link href="/articles/1">
                FIRST ARTICLE
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel fuga assumenda deserunt voluptas! Officiis perspiciatis reprehenderit at temporibus repudiandae fuga libero sed aliquam facere, explicabo accusamus ratione ut labore.</p>
            </Link> */}
    </div>
  );
}

export default index;
