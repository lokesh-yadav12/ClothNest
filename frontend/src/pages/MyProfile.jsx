import React from "react";

const MyProfile = () => {
  // Hardcoded data (replace later with backend data)
  const user = {
    name: "Lokesh Kumar",
    email: "lokesh916635@gmail.com",
    role: "Customer",
    createdAt: "2025-01-01T10:30:00Z",
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-5 text-indigo-600">
        My Profile
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Name:</span>
          <span>{user.name}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Email:</span>
          <span>{user.email}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Role:</span>
          <span>{user.role}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Joined:</span>
          <span>{new Date(user.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

