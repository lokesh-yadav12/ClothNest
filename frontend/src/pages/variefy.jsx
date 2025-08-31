import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom"; // ✅ use this for query params

const Variefy = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const variefyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/variefyStripe",
        { success, orderId },
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ fixed header
        }
      );

      if (response.data.success) {
        // ✅ Clear cart
        setCartItems({});

        // ✅ Success popup
        toast.success("Payment successful! 🎉");

        // ✅ Redirect to home
        navigate("/");
      } else {
        toast.error("Payment failed. Try again.");
        navigate("/cart");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
      navigate("/cart");
    }
  };

  useEffect(() => {
    variefyPayment();
  }, [token]);

  return <div></div>;
};

export default Variefy;
