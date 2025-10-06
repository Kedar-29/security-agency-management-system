import { useEffect, useState } from "react";

const JobApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/jobs/viewapplications")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setApplications(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:5001/api/jobs/updateapplication/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedApplication = await response.json();

      // ✅ Update UI with new status
      setApplications((prevApps) =>
        prevApps.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
      );
    } catch (error) {
      console.error("Error updating status:", error);
      setError(error.message);
    }
  };

  const sendMessage = (whatsappNumber) => {
    const message = encodeURIComponent("Congratulations! Your job application has been accepted. soon you will recive a call from the TACTICAL PANTHERS, FOR ANY QURIES YOU CAN REPLY HERE ");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Job Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">WhatsApp</th>
              <th className="border px-4 py-2">Aadhar</th>
              <th className="border px-4 py-2">DOB</th>
              <th className="border px-4 py-2">Designation</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Ex-Army</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr key={app._id} className={`border ${app.status === "Accepted" ? "bg-green-200" : app.status === "Rejected" ? "bg-red-200" : ""}`}>
                  <td className="border px-4 py-2">{app.fullName}</td>
                  <td className="border px-4 py-2">{app.whatsapp}</td>
                  <td className="border px-4 py-2">{app.aadhar}</td>
                  <td className="border px-4 py-2">{new Date(app.dob).toLocaleDateString()}</td>
                  <td className="border px-4 py-2">{app.designation}</td>
                  <td className="border px-4 py-2">{app.gender}</td>
                  <td className="border px-4 py-2">{app.exArmy}</td>
                  <td className="border px-4 py-2">{app.address}</td>
                  <td className="border px-4 py-2 font-bold">{app.status || "Pending"}</td>
                  <td className="border px-4 py-2">
                    {app.status !== "Accepted" && app.status !== "Rejected" && (
                      <>
                        <button
                          onClick={() => updateStatus(app._id, "Accepted")}
                          className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-700"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateStatus(app._id, "Rejected")}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {app.status === "Accepted" && (
                      <button
                        onClick={() => sendMessage(app.whatsapp)}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mt-2"
                      >
                        Send Message
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center p-4">No applications found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobApplicationsList;
