import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useEnroll from '../../Hooks/useEnroll';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_Payment);
const Payment = () => {
    const [cart] = useEnroll();
    const total = cart.reduce((sum, item) => sum + item.price , 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='pb-[700px] w-full pt-20 text-white'>
            <h2 className='text-center mb-20 text-sky-500 text-3xl font-bold'>taka o taka</h2>
          
            <Elements stripe={stripePromise}>
            <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;