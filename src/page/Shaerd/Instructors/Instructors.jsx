import { useEffect, useState } from "react";
import InstactorsCard from "../InstactorsCard/InstactorsCard";


const Instructors = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setPopular(data)
            })
    }, [])
    return (
        <div>
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