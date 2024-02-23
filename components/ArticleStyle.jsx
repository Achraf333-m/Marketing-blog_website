import Link from "next/link";

function ArticleStyle({ article }) {
  return (
    <Link href="articles/[articleName]" as={`articles/${article}`} className="flex flex-col justify-center items-center rounded-lg hover:border-2 hover:border-x-fuchsia-300
    /30 w-[calc(100%/3)] p-4 mb-12">
      {/* insert imag here */}
      <div className="bg-blue-300 w-64 h-64 rounded-md "></div>
      <h3 className="text-xl font-semibold">{article}</h3>
      <p className="max-w-60 font-medium text-center">
        Lorem ipsum dolor sit amet consectetur. = {article}
      </p>
    </Link>
  );
}

export default ArticleStyle;
