import AOS from 'aos';
import 'aos/dist/aos.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



AOS.init();

const Popular = ({ populer }) => {
    const { name, email, picture, rating } = populer;
    return (

        <div className="">

            <div data-aos="fade-up"
                data-aos-duration="3000" className="card bg-gray-300 opacity-25 p-3 shadow-xl ">
                <div className="">
                    <img className="w-full rounded-lg  h-56 " src={picture} alt="" />
                </div>
                <div className="">
                    <h2 className="text-red  py-1 "><span className="font-bold text-green-800">Name: </span>    <span className="font-semibold">{name}</span></h2>
                    <h3 className="text-red  py-1 "><span className="font-bold text-green-800"> Email: </span>  <span className="font-semibold">{email}</span></h3>
                    <span className="font-semibold"> <Rating
                        style={{ maxWidth: 140 }}
                        value={rating}
                        readOnly
                    /></span>
                </div>
            </div>
        </div >
    );
};

export default Popular;