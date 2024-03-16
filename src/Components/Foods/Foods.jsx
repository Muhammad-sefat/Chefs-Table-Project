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
      <Food></Food>
    </div>
  );
};

export default Foods;