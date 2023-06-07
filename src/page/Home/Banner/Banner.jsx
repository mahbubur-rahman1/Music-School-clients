import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/banner-img1.jpg'
import img2 from '../../../assets/home/banner-img2.jpg'
import img3 from '../../../assets/home/banner-img3.jpg'
import img4 from '../../../assets/home/banner-img4.jpg'
import img5 from '../../../assets/home/banner-img5.jpg'

const Banner = () => {
    return (
        <Carousel >
                <div className="">
                    <img className="" src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                
            </Carousel>
    );
};

export default Banner;