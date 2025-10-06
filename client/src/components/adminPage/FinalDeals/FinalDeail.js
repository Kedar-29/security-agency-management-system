import React, { useState } from "react";

const FinalizeDeal = () => {
  const [isFinalized, setIsFinalized] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleShowEmailInput = () => {
    setShowEmailInput(true);
  };

  const handleFinalize = async () => {
    if (!email) {
      alert("Please enter your email before finalizing the deal.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/servicerequests/finalize-deal", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        setIsFinalized(true);
        alert("✅ Deal has been finalized successfully!");
      } else {
        alert(`❌ Failed: ${data.message}`);
      }
    } catch (error) {
      console.error("❌ Error finalizing deal:", error);
      alert("An error occurred. Please check the console.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Finalize Your Deal</h2>
        <p className="text-gray-600 mb-6">Click below to confirm your deal.</p>
        {!showEmailInput ? (
          <button
            onClick={handleShowEmailInput}
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Proceed to Finalize
          </button>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 px-4 py-2 border rounded-lg w-full"
              required
            />
            <button
              onClick={handleFinalize}
              className={`px-6 py-3 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 ${
                isFinalized ? "bg-green-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={isFinalized}
            >
              {isFinalized ? "Deal Finalized" : "Finalize Deal"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FinalizeDeal;
