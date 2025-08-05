import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

const variefy = () => {

    const {navigate,token,setCartItems,backendUrl} = useContext(ShopContext)
    const [searchParams,setSearchParams] = useState()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const variefyPayment = async()=>{
            try {
                if(!token){
                    return null
                }

                const response = await axios.post(backendUrl+'/api/order/variefyStripe',{success,orderId},{headers:{token}})
                if(response.data.success){
                    setCartItems({})
                    navigate('/orders')
                }
                else{
                    navigate('/cart')
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
    }

    useEffect(()=>{
        variefyPayment();
    },[token])

  return (
    <div>

    </div>
  )
}

export default variefy