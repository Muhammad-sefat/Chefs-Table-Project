import cooker from "../../assets/cooker.png";
const Banner = () => {
  return (
    <div
      className="bg-center bg-cover md:h-[80vh] rounded-lg p-5 mx-16 my-8 text-white flex justify-center items-center text-center"
      style={{ backgroundImage: `url(${cooker})` }}
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-normal">
          Discover an exceptional cooking <br /> class tailored for you!z
        </h2>
        <p className="p-5 md:w-[80%] mx-auto">
          Food is maybe the only universal thing that really has the power to
          bring everyone together. no matter what culter,everywhere around the
          world,people get together to eat.
        </p>
        <div>
          <button className="px-3 py-2 rounded-full bg-[#0BE58A] text-black font-medium mr-5">
            Explore Now
          </button>
          <button className="border px-3 py-2 rounded-full">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
