import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
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
      <div className="flex pt-10">
        <div className="md:w-[67%] grid grid-cols-1 md:grid-cols-2 gap-5">
          {foods.map((food) => (
            <Food key={food.id} food={food}></Food>
          ))}
        </div>
        <div className="md:w-[30%] px-5">
          <div className="border p-5 rounded-xl">
            <h1>Want to Cook : 01</h1>
            <hr className="my-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
