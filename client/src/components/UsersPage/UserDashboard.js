import React, { useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    aadhar: "",
    dob: "",
    designation: "Security Guard",
    gender: "Male",
    exArmy: "No",
    address: ""
  });

  const [applications, setApplications] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/jobs/apply", formData);
      alert("Application submitted successfully!");
      setFormData({
        fullName: "",
        whatsapp: "",
        aadhar: "",
        dob: "",
        designation: "Security Guard",
        gender: "Male",
        exArmy: "No",
        address: ""
      });
    } catch (error) {
      alert("Error submitting application: " + error.response?.data?.error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <center><h2 className="text-2xl font-bold mb-4">Welcome to User Dashboard</h2></center>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-3">Apply for a Job</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="form-control" />
          <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" required className="form-control" />
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar Card Number" required className="form-control" />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required className="form-control" />

          <div>
            <label className="font-semibold">Designation Interested:</label>
            <div>
              {["Security Guard", "Supervisor", "Bouncer", "Housekeeping"].map((role) => (
                <label key={role} className="inline-flex items-center mr-4">
                  <input type="radio" name="designation" value={role} checked={formData.designation === role} onChange={handleChange} className="form-radio" />
                  <span className="ml-2">{role}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-semibold">Gender:</label>
            <div>
              {["Male", "Female"].map((gender) => (
                <label key={gender} className="inline-flex items-center mr-4">
                  <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange} className="form-radio" />
                  <span className="ml-2">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-semibold">Ex-Army Person:</label>
            <div>
              {["Yes", "No"].map((option) => (
                <label key={option} className="inline-flex items-center mr-4">
                  <input type="radio" name="exArmy" value={option} checked={formData.exArmy === option} onChange={handleChange} className="form-radio" />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="font-semibold">Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required className="form-control"></textarea>

          <button type="submit" className="btn btn-primary w-full">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboard;
