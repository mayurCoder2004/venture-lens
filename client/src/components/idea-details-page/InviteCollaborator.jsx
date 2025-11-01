import React, { useState } from "react";

const InviteCollaborator = ({ ideaId }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInvite = async () => {
    const token = localStorage.getItem("token"); // ✅ Get token directly
    console.log("Token being sent:", token);

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/analyze/${ideaId}/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Invite sent successfully!");
        setEmail("");
      } else {
        alert(data.message || "Error sending invite");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending invite");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h4 className="font-semibold mb-3 text-blue-700">Invite Collaborator</h4>
      <input
        type="email"
        placeholder="Enter collaborator email"
        className="border rounded-md px-3 py-2 w-full mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleInvite}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Invite
      </button>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default InviteCollaborator;
