import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Popular = ({ populer }) => {
    const { name, email, picture, rating } = populer;
    return (
        <div className="">
            <div data-aos="zoom-in-down" className="card w-full  bg-base-100 p-3 shadow-xl ">
                <div className="">
                    <img className="w-full h-44 rounded-lg" src={picture} alt="" />
                </div>
                <div className="">
                    <h2 className="text-red  py-1 "><span className="font-bold text-green-800">Name: </span>    <span className="font-semibold">{name}</span></h2>
                    <h3 className="text-red  py-1 "><span className="font-bold text-green-800"> Email: </span>  <span className="font-semibold">{email}</span></h3>
                    <h3 className="text-red  py-1 "><span className="font-bold text-green-800">Rating: </span>  <span className="font-semibold">{rating}</span> </h3>
                </div>
            </div>
        </div>
    );
};

export default Popular;