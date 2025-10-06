import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServiceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [statuses, setStatuses] = useState({});
  const [acceptedRequest, setAcceptedRequest] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/servicerequests/view") // Ensure correct API URL
      .then((response) => {
        console.log("Data received:", response.data);
        setRequests(response.data);

        // Initialize statuses
        const initialStatuses = {};
        response.data.forEach((request) => {
          initialStatuses[request._id] = request.status || "pending";
        });
        setStatuses(initialStatuses);
      })
      .catch((error) => console.error("Error fetching service requests:", error));
  }, []);

  const handleStatusChange = async (id, status, email) => {
    try {
      await axios.patch(`http://localhost:5001/api/servicerequests/update-status/${id}`, { status });
      setStatuses((prev) => ({ ...prev, [id]: status }));
      if (status === "accepted") {
        setAcceptedRequest(email);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Service Requests</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">From</th>
            <th className="border p-2">To</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id} className={`border ${statuses[request._id] === "accepted" ? "bg-green-200" : statuses[request._id] === "rejected" ? "bg-red-200" : ""}`}>
              <td className="border p-2">{request.name}</td>
              <td className="border p-2">{request.address}</td>
              <td className="border p-2">{request.contact}</td>
              <td className="border p-2">{request.email}</td>
              <td className="border p-2">{new Date(request.fromDate).toLocaleDateString()}</td>
              <td className="border p-2">{new Date(request.toDate).toLocaleDateString()}</td>
              <td className="border p-2 font-bold">{statuses[request._id]?.toUpperCase() || "PENDING"}</td>
              <td className="border p-2">
                <button className="bg-green-500 text-white px-2 py-1 mr-2 rounded" onClick={() => handleStatusChange(request._id, "accepted", request.email)}>Accept</button>
                <button className="bg-red-500 text-white px-2 py-1 mr-2 rounded" onClick={() => handleStatusChange(request._id, "rejected")}>Reject</button>
                {acceptedRequest === request.email && <Link to="/emailsender" className="bg-blue-500 text-white px-2 py-1 ml-2 rounded">Email</Link>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceRequests;
