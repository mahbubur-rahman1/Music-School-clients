import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import Popular from "../Popular/Popular";


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

                <div className="grid md:grid-cols-3 gap-3 p-4">
                    {
                        popular.map(populer => <Popular
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