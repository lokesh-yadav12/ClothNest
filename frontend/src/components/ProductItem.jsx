import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, img, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className='text-gray-800 cursor-pointer block'>
            <div className='overflow-hidden rounded-lg shadow-md bg-white'>
                <img 
                    src={img} 
                    alt="" 
                    className='hover:scale-110 transition-transform duration-300 ease-in-out w-full h-52 object-cover'
                />
            </div>
            <p className='pt-3 pb-1 text-sm font-medium'>{name}</p>
            <p className='text-sm font-semibold'>{currency || '$'}{price}</p>
        </Link>
    );
};

export default ProductItem;
