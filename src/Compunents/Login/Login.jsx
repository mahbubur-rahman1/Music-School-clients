// import React, { useContext, } from 'react';
// import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../AuthProviter/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

// import { AuthContext } from '../../../provider/AuthProviders';
// import useTitele from '../../../hoks/useTitle';
// import useTitle from '../../../hoks/useTitle';
// import Swal from 'sweetalert2'
// import { toast } from 'react-hot-toast';

const Login = () => {
    const {signIn, googleLogin, githubLogin} = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
 
    useAuth("Login")

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)


    if(password.length < 6){
        toast.error('please provite 6 number')
        return;
    }
      
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
            toast.success('success login')
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login is succesfull',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error => console.log(error))
    }
    const handleGoogleSignIn = () => {
        googleLogin()
        
    }
    const handleGithubSignIn = () => {
        githubLogin()
    }

    return (
        
        <div className='container mx-auto bg-purple-300 rounded-lg py-2'>
            <Helmet>
                <title>Music School Login</title>
            </Helmet>
            <h3 className=' w-80 py-2 mt-2 mx-auto text-purple-100 font-bold text-lg rounded-lg bg-purple-900 text-center'>Please Login</h3>
            <form onSubmit={handleLogin}  className="form-control w-full max-w-xs mx-auto">

                <label className="label">
                    <span className="label-text font-bold">What  your Email ?</span>

                </label>
                <input type="email" name='email' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is yours Password?</span>

                </label>
                <input type="password"  name='password' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />


                <button className='btn btn-accent mt-2' type='submit'>Login</button>

                <p>Don't have an account <span> <Link to="/register" className='link link-primary' >Registration</Link></span></p>
                <p onClick={handleGoogleSignIn} className='btn btn-error w-80 py-2 mt-2 mx-auto text-center'>
                    Login With Google
                </p>
                <p onClick={handleGithubSignIn} className='btn bg-black w-80 py-2 mt-2 mx-auto text-center'>
                 {/* <FaGithub  className=' w-10 h-7'></FaGithub> */}
                Login With GitHub 
            </p>
            </form>

        </div>
    );
};

export default Login;