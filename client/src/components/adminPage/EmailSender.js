import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    
    setError("");
    setSuccess("");

    const emailParams = { 
      to_email: email,  // Must match EmailJS template variable
      message: message 
    };

    try {
      const response = await emailjs.send(
        "service_0shbxkt",  // Replace with your EmailJS service ID
        "template_mz5wavb", // Replace with your EmailJS template ID
        emailParams,
        "wDiQNMs21f2orhULG" // Replace with your EmailJS Public Key
      );
      
      console.log("Email Sent:", response);
      setSuccess("Email Sent Successfully!");
      setEmail("");
      setMessage("");

    } catch (err) {
      console.error("Email Sending Error:", err);
      setError("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Send Email</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Email Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
