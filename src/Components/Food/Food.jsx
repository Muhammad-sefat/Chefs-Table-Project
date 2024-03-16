const Food = ({ food }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="card bg-base-100 shadow-xl rounded-xl">
          <figure>
            <img
              src={
                "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              }
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
