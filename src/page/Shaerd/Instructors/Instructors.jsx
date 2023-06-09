import { useEffect, useState } from "react";
import InstactorsCard from "../InstactorsCard/InstactorsCard";


const Instructors = () => {
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
            <div className="max-w-screen-lg  mx-auto">
                

                <div className="grid md:grid-cols-3 mt-10 gap-5 p-4">
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