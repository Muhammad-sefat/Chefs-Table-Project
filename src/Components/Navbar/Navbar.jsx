import { CiSearch } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
const Navbar = () => {
  return (
    <div className="p-5 md:px-16 flex justify-between flex-col md:flex-row space-y-3 md:space-y-0">
      <h1 className="text-3xl font-bold">Recipe Calories</h1>
      <div className="space-x-4">
        <a>Home</a>
        <a>Recipe</a>
        <a>About</a>
        <a>Search</a>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 p-2 bg-gray-300 rounded-full">
          <CiSearch className="text-xl"></CiSearch>
          <input className="bg-gray-300" type="text" placeholder="Search" />
        </div>
        <FcBusinessman className="text-4xl bg-[#0BE58A] p-2 rounded-full hidden md:inline-block"></FcBusinessman>
      </div>
    </div>
  );
};

export default Navbar;
