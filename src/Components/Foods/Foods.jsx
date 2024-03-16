import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [carts, setCarts] = useState([]);

  const handleCart = (food) => {
    setCarts([...carts, food]);
  };
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="md:pt-28 text-center">
      <h2 className="text-3xl font-bold py-3">Our Recipe</h2>
      <p className="md:w-[60%] mx-auto text-[#666]">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="flex pt-10 p-5 md:px-16">
        <div className="md:w-[67%] grid grid-cols-1 md:grid-cols-2 gap-5">
          {foods.map((food) => (
            <Food key={food.id} food={food} handleCart={handleCart}></Food>
          ))}
        </div>
        <div className="md:w-[40%] px-5">
          <div className="border p-5 rounded-xl">
            <h1>Want to Cook : 01</h1>
            <hr className="my-3" />
            <div className="flex justify-between py-3">
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
            {carts.map((cart) => {
              return (
                <div key={cart.id} className="flex justify-between space-y-3">
                  <p className="pt-3">{cart.recipe_name.slice(0, 10)}</p>
                  <p>{cart.preparing_time}</p>
                  <p>{cart.calories}</p>
                  <button className="p-1 bg-[#0BE58A] rounded-full">
                    Preparing
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
