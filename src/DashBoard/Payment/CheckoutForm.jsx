import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../AuthProviter/AuthProviders';


const CheckoutForm = ({price, cart}) => {
  const {user} = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClienSecret] = useState('');
    const [ processing, setProcessing] = useState(false);
    const [ transactionId, setTransactionId] = useState('')

    useEffect( ()=>{
      if(price > 0){
        axiosSecure.post('/create-payment-intent', {price})
      .then(res => {
        console.log(res.data.clientSecret)
        setClienSecret(res.data.clientSecret)
      })
      }
      
    } ,[price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);

        if (card === null) {
        return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if (error) {
          console.log('error', error);
          setCardError(error.message)
        } 
        else {
          setCardError('');
          
        }

        setProcessing(true)

console.log(clientSecret)
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
      );
        if(confirmError){
          console.log(confirmError)
        }
        console.log('paymentIntent', paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id)
          const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart.length,
            cartItems: cart.map(item => item._id),
            menuItems: cart.map(item => item.enrollId),
           image: cart.map(item => item.picture),
            className: cart.map(item => item.name)
          }
          axiosSecure.post('/payments', payment)
          .then(res => {
            console.log(res.data);
            if(res.data.result.insertedId){
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Payment Successfull',
                showConfirmButton: false,
                timer: 1500
              })

            }
          })
          
        }


    }

    return (
        <>
        <form className='w-2/3 mx-auto' onSubmit={handleSubmit}>
        <CardElement className='mb-5'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: 'white',
                '::placeholder': {
                  color: 'white',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
         {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        transactionId && <p className='text-green-500'>Transaction complete with
          transaction_id: <span className='text-red-500'>{transactionId}</span>
        </p>
      }
        <button className='btn btn-wide bg-blue-700 mt-10' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay Now
        </button>
      </form>
     
        </>
    );
};

export default CheckoutForm;