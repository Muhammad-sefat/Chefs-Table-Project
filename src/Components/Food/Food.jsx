import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Food = ({ food }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    preparing_time,
    calories,
    ingredients,
  } = food;
  return (
    <div className="flex justify-between">
      <div className="p-5 md:w-[65%] grid grid-cols-2 gap-5">
        <div className="card bg-base-100 shadow-xl pt-5 border p-5 rounded-lg">
          <figure>
            <img className="rounded-lg w-full" src={recipe_image} alt="Shoes" />
          </figure>
          <div className="text-start">
            <h2 className="text-xl font-semibold py-2">{recipe_name}</h2>
            <p className="pb-2">{short_description}</p>
            <hr />
            <div className="py-4">
              <h3 className="text-xl font-semibold">Ingredients 6</h3>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
            <hr />
            <div className="flex items-center gap-5 py-5">
              <div className="flex items-center gap-2">
                <CiStopwatch className="text-2xl" />
                <h2 className="text-base">{preparing_time}</h2>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineFire className="text-2xl" />
                <h2 className="text-base">
                  <span>{calories}</span> calories
                </h2>
              </div>
            </div>
            <button className="px-4 py-3 bg-[#0BE58A] rounded-xl">
              Want To Cook
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[30%]">
        <h2>Want to cook</h2>
      </div>
    </div>
  );
};

export default Food;
