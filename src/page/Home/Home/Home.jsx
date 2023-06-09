import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import Popular from "../Popular/Popular";
import SectionTitel from "../SectionTitel/SectionTitel";



const Home = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => {
                setPopular(data)
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-lg mx-auto">
                <WelcomeSection></WelcomeSection>


                <SectionTitel
                heading="Popular Instactors"
                >
                    
                </SectionTitel>
                <hr />

                <div className="grid md:grid-cols-3 gap-5 mt-10 p-4">
                    {
                       

                        popular.slice(0, 6).map(populer => <Popular
                            key={populer.id}
                            populer={populer}
                        ></Popular>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;