import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useSearchParams, useNavigate } from "react-router-dom"; // ✅ added useNavigate

const Variefy = () => {
  const { token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!token) return;

        const success = searchParams.get("success");
        const orderId = searchParams.get("orderId");

        const res = await axios.post(
          backendUrl + "/api/order/verifyStripe", // ✅ make sure backend matches this
          { success, orderId, userId: JSON.parse(localStorage.getItem("userId")) },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.success) {
          // ✅ Clear cart in frontend
          setCartItems({});
          localStorage.removeItem("cartItems"); // optional
          toast.success("Payment successful!");
          navigate("/");
        } else {
          toast.error("Payment failed");
          navigate("/cart");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error verifying payment");
        navigate("/cart");
      }
    };

    verifyPayment();
  }, [token]);

  return null;
};

export default Variefy;
