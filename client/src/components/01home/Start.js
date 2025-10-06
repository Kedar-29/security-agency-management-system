import React, { useEffect, useState } from "react";

const Start = () => {
  const [headcount, setHeadcount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage or set to 0
    const count = parseInt(localStorage.getItem("headcount")) || 0;
    const newCount = count + 1;
    localStorage.setItem("headcount", newCount);
    setHeadcount(newCount);
  }, []);

  const image = {
    src: "images/1.jpg",
    line1: "Tactical Panthers",
    line2: "Your safety is our concern",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {/* Full Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-8xl md:text-8xl font-bold mb-2">{image.line1}</h1>
        <p className="text-lg md:text-5xl">{image.line2}</p>
        <p className="text-lg md:text-2xl mt-4">Visitors: {headcount}</p>
      </div>
    </div>
  );
};

export default Start;
