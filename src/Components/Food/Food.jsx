import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Food = ({ food, handleCart }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    preparing_time,
    calories,
    ingredients,
    recipe_id,
  } = food;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl pt-5 border p-5 rounded-lg h-full">
        <figure>
          <img
            className="rounded-lg w-full h-[60vh]"
            src={recipe_image}
            alt="Recipe"
          />
        </figure>
        <div className="text-start">
          <h2 className="text-xl font-semibold py-2">{recipe_name}</h2>
          <p className="pb-2">{short_description}</p>
          <hr />
          <div className="py-4">
            <h3 className="text-xl font-semibold">Ingredients 6</h3>
            <div>
              {ingredients.map((ingredient, idx) => {
                return <li key={idx}>{ingredient}</li>;
              })}
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-5 py-5">
            <div className="flex items-center gap-2">
              <CiStopwatch className="text-2xl" />
              <h2 className="text-base">{preparing_time} minutes</h2>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineFire className="text-2xl" />
              <h2 className="text-base">
                <span>{calories}</span> calories
              </h2>
            </div>
          </div>
          <button
            onClick={() => handleCart(food, recipe_id)}
            className="px-4 py-3 bg-[#0BE58A] rounded-xl"
          >
            Want To Cook
          </button>
        </div>
      </div>
    </div>
  );
};
Food.propTypes = {
  food: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default Food;
