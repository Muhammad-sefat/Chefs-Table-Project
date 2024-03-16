const Food = ({ food }) => {
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-[65%]">
        <div className="card bg-base-100 shadow-xl pt-5">
          <figure>
            <img
              className="rounded-lg"
              src={
                "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              }
              alt="Shoes"
            />
          </figure>
          <div className="text-start p-5">
            <h2>name</h2>
            <p>title</p>
            <hr />
            <h3>Ingredients 6</h3>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <div className="flex justify-between items-center">
              <div>
                <h2>minutes</h2>
              </div>
              <div>calories</div>
            </div>
            <button>Want To Cook</button>
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
