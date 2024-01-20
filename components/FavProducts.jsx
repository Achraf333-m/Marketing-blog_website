import ArticleStyle from "./ArticleStyle";

function FavProducts() {
  return (
    <>
      <h1 className="p-2 text-3xl text-black/70 text-center font-bold underline underline-offset-8">
        Customer's Favorites
      </h1>
      <ul className="flex w-full justify-center items-center flex-wrap">
        <ArticleStyle />
        <ArticleStyle />
        <ArticleStyle />
      </ul>
    </>
  );
}

export default FavProducts;
