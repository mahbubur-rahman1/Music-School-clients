import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProviter/AuthProviders';




const ClassCard = ({ populer }) => {
    const { name, picture, email, rating, classe, price } = populer;

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


const handleEnroll = ()=>{
    if(user && user.email){
        const enrollData = {enrollId: _id, danceName, image, instructorName, price, rating, availableSeats, email: user.email }
        fetch('http://localhost:5000/classees', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(enrollData)
        })
        .then( res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your class is added on selected page',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
   
    }
    else{
        Swal.fire({
            title: "Are you want to login?",
            text: "For enroll you have to login!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login", {state: {from: location}});
            }
          });
    }
    

}







   
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
                 <button onClick={()=> handleEnroll(data)}
        className='btn btn-primary mt-3'>Enroll Now</button>
            </div>
        </div>
    );
};

export default ClassCard;