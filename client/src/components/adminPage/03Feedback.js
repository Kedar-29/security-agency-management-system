import { useEffect, useState } from "react";
import axios from "axios";

const FeedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/feedback");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Feedback List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border px-6 py-3 text-left">Name</th>
              <th className="border px-6 py-3 text-left">Email</th>
              <th className="border px-6 py-3 text-left">Feedback</th>
              <th className="border px-6 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <tr key={feedback._id} className="border hover:bg-gray-100">
                  <td className="border px-6 py-3">{feedback.name}</td>
                  <td className="border px-6 py-3">{feedback.email}</td>
                  <td className="border px-6 py-3">{feedback.feedback}</td>
                  <td className="border px-6 py-3">{new Date(feedback.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No feedback available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackTable;
