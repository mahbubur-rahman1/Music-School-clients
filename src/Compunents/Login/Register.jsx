// import React, { useContext } from 'react';
// import { Link } from "react-router-dom";
// import { AuthContext } from '../../../provider/AuthProviders';
// import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../AuthProviter/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, password, email, photo)

        if(password.length < 6){
            toast.error('please provite 6 number')
            return;
        }
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your accoubt is succesfull',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='container w-50 mx-auto bg-purple-300 rounded-lg py-2'>
            <h2 className=' w-80 py-2 mt-2 mx-auto text-purple-100 font-bold text-lg rounded-lg bg-purple-900 text-center'>Please Register Your Account </h2>

            <form onSubmit={handleRegister} className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                    <span className="label-text font-bold">What is your name ?</span>
                    
                </label>
                <input type="text" name='name' placeholder="Type here"  required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your image URL ?</span>
                    
                </label>
                <input type="text" name='photo' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Email ?</span>
                    
                </label>
                <input type="email" name='email' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Password?</span>
                    
                </label>
                <input type="password" name='password' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                <button className='btn btn-accent mt-2' type='submit'>Register</button>

                <p>Already have an account <span> <Link className='link link-primary' to="/login">Login</Link></span></p>
                
            </form>
        </div>
    );
};

export default Register;