import React from 'react';
import SectionTitel from '../SectionTitel/SectionTitel';

const ExtraSection = () => {
    return (
        <div>
            <SectionTitel
                heading="Introduse "
            ></SectionTitel>
            <hr />
            <div className="grid md:grid-cols-3 gap-5  mt-10 ">
                <div className="card ">
                    <div data-aos="fade-right" className="card bg-black opacity-80   mb-5 p-4">
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>Hipop: </span> <span className='text-purple-50 '>Pop music, a vibrant sound,
                            Melodies that make hearts pound,
                            Catchy hooks and rhythms strong,
                            It's the genre that keeps us singing along.</span></h4>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="card bg-black opacity-80   mb-5 p-4">
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>DJ music: </span> <span className='text-purple-50 '>DJ music, a pulsating beat,
                            Electrifying crowds on their feet,
                            Mixing tracks with seamless flow,
                            Creating an atmosphere that makes us glow.</span></h4>
                    </div>

                </div>


                <div data-aos="fade-up"
                    data-aos-duration="3000" className="">
                    <img className='w-full h-full rounded-lg' src="https://thumbs.dreamstime.com/b/johannesburg-south-africa-august-diverse-youth-music-school-orchestra-diverse-youth-music-school-orchestra-137387219.jpg" alt="" />
                </div>


                <div className="">
                    <div data-aos="fade-down-left" className="card bg-black opacity-80   mb-5 p-4">
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>Enchanting: </span> <span className='text-purple-50 '>In the enchanting halls of music's realm,
                            Where melodies music and dreams take helm,
                            Let knowledge flow and talents soar high</span></h4>
                    </div>
                    <div data-aos="fade-left" className="card bg-black opacity-80   mb-5 p-4">
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>Rap music: </span> <span className='text-purple-50 '>Rap music, words with power and flow,
                            Expressing stories and emotions that grow,
                            Rhymes that captivate, lyrics that ignite,
                            A genre that speaks truth and shines bright.</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;