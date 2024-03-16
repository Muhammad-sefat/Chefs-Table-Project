import { CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="p-5 md:px-16 flex justify-between">
      <h1 className="text-3xl font-bold">Recipe Clories</h1>
      <div className="space-x-4">
        <a>Home</a>
        <a>Recipe</a>
        <a>About</a>
        <a>Search</a>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 p-1 bg-gray-300 rounded-lg">
          <CiSearch></CiSearch>
          <input className="bg-gray-300" type="text" placeholder="Search" />
        </div>
        <MdManageAccounts className="text-4xl bg-[#0BE58A] p-2 rounded-full"></MdManageAccounts>
      </div>
    </div>
  );
};

export default Navbar;
