import React, { useEffect, useState } from "react";

const FinalizedDealsTable = () => {
  const [finalizedDeals, setFinalizedDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFinalizedDeals = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/servicerequests/finalized");
        if (!response.ok) throw new Error("Failed to fetch finalized deals");

        const data = await response.json();
        
        // ✅ Ensure we filter only deals where finalizedDeal is true
        const filteredDeals = data.filter(deal => deal.finalizedDeal === true);
        setFinalizedDeals(filteredDeals);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFinalizedDeals();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading finalized deals...</p>;
  if (error) return <p className="text-red-500 text-center">❌ {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Finalized Deals</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {finalizedDeals.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">No finalized deals found.</td>
              </tr>
            ) : (
              finalizedDeals.map((deal) => (
                <tr key={deal._id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-3">{deal.name}</td>
                  <td className="px-4 py-3">{deal.email}</td>
                  <td className="px-4 py-3">{deal.contact}</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">Finalized ✅</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinalizedDealsTable;
