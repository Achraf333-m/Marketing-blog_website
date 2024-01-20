function ArticleStyle() {
  return (
    <li className="flex flex-col justify-center items-center w-[calc(100%/3)] p-4">
      {/* insert imag here */}
      <div className="bg-blue-300 w-64 h-64 rounded-md "></div>
      <h3 className="text-xl font-semibold">Title</h3>
      <p className="max-w-60 font-medium text-center">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </li>
  );
}

export default ArticleStyle;
