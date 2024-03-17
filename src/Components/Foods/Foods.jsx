import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cooking, setCooking] = useState([]);

  const handleCart = (food) => {
    setCarts([...carts, food]);
  };
  const handleCooking = (cart, id) => {
    const remainingCooking = carts.filter((cart) => cart.recipe_id !== id);
    setCooking([...cooking, cart]);
    setCarts(remainingCooking);
  };
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold py-3">Our Recipe</h2>
      <p className="md:w-[60%] mx-auto text-[#666]">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="flex pt-10 p-5 md:px-10">
        <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5">
          {foods.map((food) => (
            <Food key={food.id} food={food} handleCart={handleCart}></Food>
          ))}
        </div>
        <div className="md:w-[40%] px-5">
          <div className="border p-5 rounded-xl">
            <h1 className="text-xl font-semibold">
              Want to Cook : {carts.length}
            </h1>
            <hr className="my-3" />
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 p-3">
                {carts.map((cart) => {
                  return (
                    <tr key={cart.id}>
                      <td>{cart.recipe_name}</td>
                      <td>{cart.preparing_time}</td>
                      <td>{cart.calories} Calories</td>
                      <button
                        onClick={() => handleCooking(cart, cart.recipe_id)}
                        className="px-3 py-2 bg-[#0BE58A] rounded-xl"
                      >
                        Preparing
                      </button>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2 className="text-xl font-semibold mt-6">
              Currently Cooking : {cooking.length}
            </h2>
            <hr className="my-5" />
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 p-3">
                {cooking.map((cook) => {
                  return (
                    <tr key={cook.id}>
                      <td>{cook.recipe_name}</td>
                      <td>{cook.preparing_time}</td>
                      <td>{cook.calories} Calories</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
