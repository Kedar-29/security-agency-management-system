import React, { useState } from "react";

function ServicesForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
    bouncers: 0,
    guards: 0,
    housekeeping: 0,
    supervisors: 0,
    fromDate: "",
    toDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📤 Sending Data:", JSON.stringify(formData, null, 2));

    try {
      const response = await fetch("http://localhost:5001/api/servicerequests/send", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("✅ Server Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      alert("Service request submitted successfully!");
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <div>
      <center><h2>Service Request Form</h2></center><br />
      <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">Individual / Company Name</label>
          <input type="text" name="name" className="w-full p-2 border rounded" required onChange={handleChange} />

          <label className="block">Address</label>
          <input type="text" name="address" className="w-full p-2 border rounded" required onChange={handleChange} />

          <label className="block">Contact Number</label>
          <input type="tel" name="contact" className="w-full p-2 border rounded" required onChange={handleChange} />

          <label className="block">Email</label>
          <input type="email" name="email" className="w-full p-2 border rounded" onChange={handleChange} />

          <div className="grid grid-cols-2 gap-4">
            <div><label className="block">Bouncers</label><input type="number" name="bouncers" min="0" className="w-full p-2 border rounded" onChange={handleChange} /></div>
            <div><label className="block">Guards</label><input type="number" name="guards" min="0" className="w-full p-2 border rounded" onChange={handleChange} /></div>
            <div><label className="block">Housekeeping</label><input type="number" name="housekeeping" min="0" className="w-full p-2 border rounded" onChange={handleChange} /></div>
            <div><label className="block">Supervisors</label><input type="number" name="supervisors" min="0" className="w-full p-2 border rounded" onChange={handleChange} /></div>
          </div>

          <label className="block">From Date</label>
          <input type="date" name="fromDate" className="w-full p-2 border rounded" required onChange={handleChange} />

          <label className="block">To Date</label>
          <input type="date" name="toDate" className="w-full p-2 border rounded" required onChange={handleChange} />

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default ServicesForm;
