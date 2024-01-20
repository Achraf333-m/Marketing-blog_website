import ArticleStyle from "./ArticleStyle";

function FavProducts() {
  const articles = [
    "article1",
    "article2",
    "article3",
    "article4",
    "article5",
    "article6",
    "article7",
    "article8",
    "article9",
  ];
  return (
    <>
      <h1 className="p-2 text-3xl text-black/70 text-center font-bold underline underline-offset-8">
        Customer's Favorites
      </h1>
      <ul className="flex w-full justify-center items-center flex-wrap">
        <ul className="flex w-full justify-center items-center flex-wrap">
          {articles.slice(3, 6).map((article) => (
            <ArticleStyle article={article} />
          ))}
        </ul>
      </ul>
    </>
  );
}

export default FavProducts;
