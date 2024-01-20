function ArticleLanding() {
  return (
    <div className="py-20 px-10 w-full">
      <div className="flex flex-col mt-32 py-10 items-center space-y-10 text-white">
        <h1 className="text-cente text-5xl mb-8 text-white font-bold">
          Explore Articles and Products
        </h1>
        <ul className="flex w-full justify-around ">
          <li>
            <h3 className="text-xl font-semibold underline underline-offset-4">Filter</h3>
          </li>
          <li className="text-black">
            <select defaultValue="Filters" className="text-center py-2 cursor-pointer outline-none px-3 bg-black/70 rounded-md text-white ">
              <option className="bg-black" value="Price, low to high">Low to high</option>
              <option className="bg-black" value="Price, high to low">High to low</option>
              <option className="bg-black" value="ratings, lowest to highest">Best rated</option>
            </select>
          </li>
        </ul>
        <hr className="w-[70vw] rounded-full bg-white"/>
      </div>
    </div>
  );
}

export default ArticleLanding;
