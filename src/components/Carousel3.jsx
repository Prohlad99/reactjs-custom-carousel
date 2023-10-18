import { useEffect, useState } from "react";
import prod1 from "../assets/images/product1.jpg";
import prod2 from "../assets/images/product2.jpg";
import prod3 from "../assets/images/product3.jpg";

const Carousel3 = () => {
  const img = [prod1, prod2, prod3];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex <= img.length - 1) {
        setImageIndex(imageIndex + 1);
      }
      if (imageIndex === img.length - 1) {
        setImageIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex, img.length]);

  const handleNext = () => {
    let len = img.length;
    if (imageIndex === len - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  const handleIndicator = (index) => {
    setImageIndex(index);
  };
  const handlePre = () => {
    if (imageIndex === 0) {
      setImageIndex(img.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };
  return (
    <div className="mx-auto w-[500px] h-[300px] relative">
      {/* container */}
      <div className="w-[500px] h-[300px] border-2 mx-auto overflow-hidden">
        <img className="w-full h-[full]" src={img[imageIndex]} alt="" />
      </div>
      {/* next pre button  */}
      <div className="absolute  w-full flex justify-between top-[50%]">
        <div>
          <button
            onClick={handlePre}
            className="bg-slate-400 text-white px-4 py-1"
          >
            Pre
          </button>
        </div>
        <div>
          <button
            onClick={handleNext}
            className="bg-slate-400 text-white px-4 py-1"
          >
            Next
          </button>
        </div>
      </div>

      {/* indicator */}
      <div className="absolute -bottom-4 w-full">
        <div className=" flex justify-center">
          {img.map((img, index) => (
            <button
              key={index}
              onClick={() => handleIndicator(index)}
              className={`w-[10px] h-[10px] rounded-full border-[1px] border-stone-500 mr-2 ${
                imageIndex === index ? "bg-blue-600" : null
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel3;
