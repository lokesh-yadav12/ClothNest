import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { token, backendUrl } = useContext(ShopContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!token) return;

        const userId = JSON.parse(localStorage.getItem("userId"));

        const res = await axios.get(
          `${backendUrl}/api/user/profile/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.success) {
          setUser(res.data.user);
        } else {
          toast.error("Failed to load profile");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching profile");
      }
    };

    fetchProfile();
  }, [token, backendUrl]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600">
        Loading profile...
      </div>
    );
  }

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
          <span>{user.role || "Customer"}</span>
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
