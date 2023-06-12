import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import Popular from "../Popular/Popular";
import SectionTitel from "../SectionTitel/SectionTitel";
import ClassReview from "../ClassReview/ClassReview";
import ExtraSection from "../ExtraSection/ExtraSection";
import { Helmet } from "react-helmet";



const Home = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-site-mahbubur-rahman1.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setPopular(data)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Music School</title>
            </Helmet>
            
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

                <SectionTitel
                    heading="Classes "
                >

                </SectionTitel>
                <hr />

                <ClassReview></ClassReview>
                <ExtraSection></ExtraSection>

            </div>


        </div>
    );
};

export default Home;