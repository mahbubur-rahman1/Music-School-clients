import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css';

const ClassDetailsCard = ({populer}) => {

    const { name, picture, email, rating, classe, price } = populer;
    return (
        <div className='card w-full  bg-base-100 p-3 shadow-xl'>
            <img className='w-full h-48' src={picture} alt="" />
            <div className="">
                <h3 className="text-red  py-1 "><span className="font-bold text-green-800"> Email: </span>  <span className="font-semibold">{email}</span></h3>
                <h3 className="text-red  py-1 "><span className="font-bold text-green-800"> Class Name: </span>  <span className="font-semibold">{classe}</span></h3>
                <h3 className="text-red  py-1 "><span className="font-bold text-green-800"> Course Fee: </span>  <span className="font-semibold">${price}</span></h3>
                <span className="font-semibold"> <Rating
                    style={{ maxWidth: 140 }}
                    value={rating}
                    readOnly
                /></span>
            </div>
        </div>
    );
};

export default ClassDetailsCard;