const WhereWeServe = () => {
    const locations = [
      "/sliders/1.png",
      "/sliders/2.png",
      "/sliders/3.png",
      "/sliders/4.png",
      "/sliders/5.png",
    ];
  
    return (
      <div className="p-9 text-center">
        <h2 className="text-3xl font-bold mb-6">Where We Serve</h2>
        <div className="grid grid-cols-3 gap-4">
          {locations.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
              <img src={src} alt={`Location ${index + 1}`} className="w-70% h-60 object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhereWeServe;