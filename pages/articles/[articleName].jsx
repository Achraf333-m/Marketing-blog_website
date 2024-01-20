export default function Article({ articleName }) {
  return (
    <div>
      <h1>{articleName}</h1>
      {/* Rest of the article content */}
      <div>{articleName}</div>
      <div className="bg-white text-black">article image 
      {articleName}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch the list of articles from your data source
  const articles = ["article1", "article2", "article3"];

  // Generate paths for all articles
  const paths = articles.map((article) => ({
    params: { articleName: article },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { articleName } = params;

  // Fetch the article content based on the articleName
  // You can fetch data from an API or a database here

  return {
    props: {
      articleName,
      // Other article content as needed
    },
  };
}
