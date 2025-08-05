// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext.jsx'
// import Title from '../components/Title';
// import axios from 'axios';

// const Orders = () => {
//   const {backendUrl,token,currency} = useContext(ShopContext);
// const [orderData,setOrderData] = useState([])

// const loadOrderData = async()=>{
//   try {
    
//     if(!token){
//       return null
//     }
//       // const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{ Authorization: `Bearer ${token}` }})
      
//       console.log("Fetching orders...");
//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { Authorization: `Bearer ${token}` } });
//       console.log("API Response:", response.data);

      
//       if(response.data.success){
//         let allOrdersItem = []
//         // response.data.orders.map((order) =>{
//         //   order.items.map((item)=>{
//         //       item['status'] = order.status
//         //       item['payment'] = order.payment
//         //       item['paymentMethod'] = order.paymentMethod
//         //       item['date'] = order.date
//         //       allOrdersItem.push(item) ;    
//         //   })
//         // })
//         response.data.orders.forEach((order) => {
//           order.items.forEach((item) => {
//             item['status'] = order.status;
//             item['payment'] = order.payment;
//             item['paymentMethod'] = order.paymentMethod;
//             item['date'] = order.date;
//             allOrdersItem.push(item);
//           });
//         });

//         console.log("Processed Orders:", orderData);

        
//         setOrderData(allOrdersItem.reverse())
//       }
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//   }
// }

//       useEffect(()=>{
//       loadOrderData()
//       },[token,backendUrl])

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//           <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       <div className=''>
//         {
//           orderData.map((item,index)=>(
//             <div key={index} className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img className='w-16 sm:w-20' src={item.image[0]} alt='' />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                       <p className='text-lg'>{currency}{item.price}</p>
//                       <p>Quantity: 1</p>
//                       <p>Size: M</p>  
//                   </div>
//                   <p className='mt-2'>Date: <span className='text-gray-400'>{item.date}</span></p>
//                   </div>
//               </div>

//               <div className='md:w-1/2 flex justify-between'>
//                   <div className='flex items-center gap-2'>
//                       <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                       <p className='text-sm md:text-base'>Ready to ship</p>
//                   </div>
//                   <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
//               </div>

//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      console.log("Token:", token);
      if (!token) {
        console.log("No token found. Skipping API call.");
        return;
      }

      console.log("Fetching orders...");
      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        {headers:{token}}
      );
      console.log("API Response:", response.data);

      if (!response.data.success || !response.data.orders || response.data.orders.length === 0) {
        console.log("No orders found!");
        setOrderData([]); // Ensure state is empty if no orders
        return;
      }

      let allOrdersItem = [];
      response.data.orders.forEach((order) => {
        order.items.forEach((item) => {
          item['status'] = order.status;
          item['payment'] = order.payment;
          item['paymentMethod'] = order.paymentMethod;
          item['date'] = order.date;
          allOrdersItem.push(item);
        });
      });

      setOrderData(allOrdersItem.reverse());
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
    console.log("token",token)
  }, [token, backendUrl]);

  // Log orderData updates
  useEffect(() => {
    console.log("Updated Order Data:", orderData);
  }, [orderData]);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {/* Show message if no orders exist */}
      {orderData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No orders found.</p>
      )}

      <div>
        {orderData.map((item, index) => (
          <div key={index} className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image[0]} alt='' />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className='mt-2'>Date: <span className='text-gray-400'>{item.date}</span></p>
              </div>
            </div>

            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to ship</p>
              </div>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
