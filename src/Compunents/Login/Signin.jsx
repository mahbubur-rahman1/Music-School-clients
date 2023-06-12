import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviter/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";

const Signin = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [erroror, setError] = useState('')
  console.log(erroror)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.photoURL)
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("https://assignment-12-server-site-mahbubur-rahman1.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((datas) => {
                if (datas.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Create account succesfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                 
                }
              });
          })
          .then((error) => {
            console.log(error);
          
          });
          navigate("/");
      })
      .catch((error) => {
        
       console.log(error)
      });
  };
  //   console.log(errors);


  const [errorPass,  setErrorPass] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const[password, setPassword] = useState("")
console.log(password)


const checkValidation = (e)=>{
  const confPass = e.target.value;
  setConfirmPassword(confPass);
  if(password !== confPass){
    setErrorPass("password don't match")
  }
  else{
    setErrorPass("password don't match")
}
}

const [show, setShow] = useState(false)
    const handlePasswordShow =()=>{
        setShow(!show)
      }

      const [shows, setShows] = useState(false)
    const handlePasswordShows =()=>{
        setShows(!shows)
      }

  return (
    <div>
      <Helmet>
        <title>Music School | Signup</title>
      </Helmet>
      <div className=" mt-11" data-aos="fade-up">
        <div className=" w-10/12 md:w-4/12 lg:w-5/12 mx-auto  ">
          <div className="card  w-full  shadow-2xl bg-black bg-opacity-50">
            <h2 className="text-center pt-5 text-3xl text-sky-500 ">
              Please Sign up
            </h2>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    {...register("name", { required: true, maxLength: 80 })}
                    className="input input-bordered text-black"
                  />
                  {errors.name && <p className="text-red-500">name required</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true, maxLength: 80 })}
                    className="input input-bordered text-black"
                  />
                 {erroror? <><p className="text-red-500">already use this email</p></> : ' '}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <div className="relative form-control">
                  <input
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                    type={show? "text" : "password"}
                    placeholder="password"
                    {...register("password", { required: true,
                         maxLength: 80,
                         pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/
                        })}
                    className="input input-bordered text-black"
                  />
                    <span onClick={handlePasswordShow} className="absolute cursor-pointer text-red-800 font-semibold top-2 right-5">
                      {show? "Hide" : "Show"}
                        </span>
                  </div>
                     {
                errors.password?.type === 'required' && 
                <p className="text-red-500">Passwors required</p>
              }
               {
                errors.password?.type === 'minLength' && 
                <p className="text-red-500">Passwors must be 6 characters</p>
              }
               {
                errors.password?.type === 'maxLength' && 
                <p className="text-red-500">Passwors must be less than 20 characters</p>
              }
              {
                errors.password?.type === 'pattern' && 
                <p className="text-red-500">Passwors must be one uppercase one lowercase one spicial characters</p>
              }

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Confirm Password
                    </span>
                  </label>
                  <div className="form-control relative">
                  <input
                  type={shows? "text" : "password"}
                  defaultValue={confirmPassword}
                  onChange={(e) => checkValidation(e)}
                    
                    placeholder="password"
                    {...register("confirmPassword", {
                      required: true,
                      maxLength: 80,
                      pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-])/
                    })}
                    className="input input-bordered text-black"
                  />
                  <span onClick={handlePasswordShows} className="absolute cursor-pointer text-red-800 font-semibold top-2 right-5">
                      {shows? "Hide" : "Show"}
                        </span>
                  </div>
                   {
                errors.confirmPassword?.type === 'required' && 
                <p className="text-red-500">Passwors required</p>
              }
              {
                errors.confirmPassword?.type === 'pattern' && 
                <p className="text-red-500">Don't match password</p>
              }

              

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo url"
                    {...register("photoURL", {
                      required: true,
                    })}
                    className="input input-bordered text-black"
                  />
                  {errors.photoURL && (
                    <p className="text-red-500">photo URL required</p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign up"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <p className="mt-3">
                already have an acccout?{" "}
                <Link to="/login">
                  {" "}
                  <span className="text-red-500">Login</span>
                </Link>{" "}
              </p>
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
