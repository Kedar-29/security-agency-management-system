import React from "react";

const UniformSection = () => {
  const uniformDetails = {
    imageSrc: "images/uniform.jpg",
    title: "Tactical Panthers Uniform",
    details: [
      "Green Shirt",
      "Black Trousers",
      "Security badge",
      "Safety shoes",
      "Company Cap",
      "Lanyard"
    ]
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      {/* Uniform Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={uniformDetails.imageSrc} alt="Security Guard Uniform" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Uniform Details */}
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">{uniformDetails.title}</h2>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          {uniformDetails.details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniformSection;