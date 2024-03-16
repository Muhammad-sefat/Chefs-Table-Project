import "./App.css";
import Banner from "./Components/Banner/Banner";
import Foods from "./Components/Foods/Foods";
import Navbar from "./Components/Navbar/Navbar";
import WantCook from "./Components/WantCook/WantCook";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex justify-center flex-col md:flex-row gap-5">
        <Foods></Foods>
        <WantCook></WantCook>
      </div>
    </>
  );
}

export default App;
