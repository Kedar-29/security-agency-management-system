import React from "react";
import { Link } from "react-router-dom";

const CareerSection = () => {
  const careers = [
    { title: "Guard", description: "Responsible for ensuring security and monitoring premises." },
    { title: "Supervisor", description: "Manages security teams and oversees operations." },
    { title: "Bouncer", description: "Ensures safety at events and enforces entry regulations." },
    { title: "Housekeeping", description: "Maintains cleanliness and organization at designated locations." }
  ];

  return (
    <div className="p-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">Career Opportunities at Tactical Panthers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careers.map((career, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{career.title}</h3>
            <p className="text-gray-700">{career.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
      <Link as={Link} to="/UserLogin">Apply for job</Link>
      </div>
    </div>
  );
};

export default CareerSection;
