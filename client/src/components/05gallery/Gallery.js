import React from "react";

const images = [
  { src: "/Gallery/1.jpg" },
  { src: "/Gallery/2.jpg" },
  { src: "/Gallery/3.jpg" },
  { src: "/Gallery/4.jpg" },
  { src: "/Gallery/5.jpg" },
  { src: "/Gallery/6.jpg" },
  { src: "/Gallery/7.jpg" },
  { src: "/Gallery/8.jpg" },
  { src: "/Gallery/9.jpg" },

];

function Gallery() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Our Gallery</h2>
      <p className="text-center text-gray-600 mb-6">
        Explore moments from our journey and the quality we deliver.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
