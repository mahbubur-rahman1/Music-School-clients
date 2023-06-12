

import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviter/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                title: 'Login Successfull',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, { replace: true });
        })
        navigate("/")
        .catch(error =>{
            console.log(error)
        })

    }


    console.log(errors);

    const [show, setShow] = useState(false)
    const handlePasswordShow =()=>{
        setShow(!show)
      }
  return (
    <div>
        <Helmet>
        <title>Music School | Login</title>
        </Helmet>
      <div className=" " data-aos="fade-up " >
        <div className=" mb-6 w-10/12 md:w-4/12 lg:w-5/12 mx-auto  ">
          <div className="card  w-full text-black   shadow-2xl bg-white bg-opacity-90">
            <h2 className="text-center pt-5 text-3xl text-sky-500 ">
              Please Login
            </h2>
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register("email", {required: true, maxLength: 80})} 
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="form-control relative">
                  <input
                  type={show? "text" : "password"}
                    
                    placeholder="password"
                    {...register("password", {required: true, maxLength: 80})} 
                    className="input input-bordered text-black"
                  />
                  <span onClick={handlePasswordShow} className="absolute cursor-pointer text-red-800 font-semibold top-2 right-5">
                      {show? "Hide" : "Show"}
                        </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <p className="mt-3">Didn't have an acccout?  <Link to='/signup'> <span className="text-red-500" >Signup</span></Link> </p>
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
