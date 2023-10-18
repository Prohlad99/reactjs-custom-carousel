import "./App.css";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import Carousel3 from "./components/Carousel3";

function App() {
  return (
    <>
      <div className="flex gap-8 justify-center">
        <div>
          <Carousel />
        </div>
        <div>
          <Carousel2 />
        </div>
      </div>
      <div className="mt-[100px] mb-11">
        <div>
          <Carousel3 />
        </div>
      </div>
    </>
  );
}

export default App;
