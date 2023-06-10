import React from 'react';
import SectionTitel from '../SectionTitel/SectionTitel';

const ExtraSection = () => {
    return (
        <div>
            <SectionTitel
                heading="Introduse "
            ></SectionTitel>
            <hr />
            <div className="grid md:grid-cols-3 mt-10 ">
                <div className="card">
                    <div className="">
                        <h4 className="">In the enchanting halls of music's realm,
                            Where melodies dance and dreams take helm,
                            Let knowledge flow and talents soar high,
                            In this school, music shall never die.</h4>
                    </div>
                    <div className="card">
                        <h4 className="">
                            Let knowledge flow and talents soar high,
                            In this school, music shall never die</h4>
                    </div>
                </div>


                <div className="">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlo3XMg2eGiOgggGsaaCikZj6a-F-8iyrog&usqp=CAU" alt="" />
                </div>


                <div className="">

                </div>
            </div>
        </div>
    );
};

export default ExtraSection;