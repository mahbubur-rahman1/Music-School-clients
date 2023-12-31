import { useEffect, useState } from "react";
import InstactorsCard from "../InstactorsCard/InstactorsCard";
import { Helmet } from "react-helmet";


const Instructors = () => {
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
                <title>Music School || Instructors</title>
            </Helmet>
            <div className="max-w-screen-lg  mx-auto">
                

                <div className="grid md:grid-cols-3 gap-5 p-4">
                    {

                        popular.map(populer => <InstactorsCard
                            key={populer.id}
                            populer={populer}
                        ></InstactorsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;