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
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>Enchanting: </span> <span className='text-purple-50 '>In the enchanting halls of music's realm,
                            Where melodies dance and dreams take helm,
                            Let knowledge flow and talents soar high,
                            In this school, music shall never die.</span></h4>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className="card bg-black opacity-80   mb-5 p-4">
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>Enchanting: </span> <span className='text-purple-50 '>In the enchanting halls of music's realm,
                            Where melodies dance and dreams take helm,
                            Let knowledge flow and talents soar high,
                            In this school, music shall never die.</span></h4>
                    </div>

                </div>


                <div data-aos="fade-up"
                    data-aos-duration="3000" className="">
                    <img className='w-full h-full rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlo3XMg2eGiOgggGsaaCikZj6a-F-8iyrog&usqp=CAU" alt="" />
                </div>


                <div className="">
                    <div data-aos="fade-down-left" className="card bg-black opacity-80   mb-5 p-4">
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>Enchanting: </span> <span className='text-purple-50 '>In the enchanting halls of music's realm,
                            Where melodies dance and dreams take helm,
                            Let knowledge flow and talents soar high,
                            In this school, music shall never die.</span></h4>
                    </div>
                    <div data-aos="fade-left" className="card bg-black opacity-80   mb-5 p-4">
                        <h4 className=""><span className='text-2xl text-red-500 font-semibold '>Enchanting: </span> <span className='text-purple-50 '>In the enchanting halls of music's realm,
                            Where melodies dance and dreams take helm,
                            Let knowledge flow and talents soar high,
                            In this school, music shall never die.</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;