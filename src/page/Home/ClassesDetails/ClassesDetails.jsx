import React, { useEffect, useState } from 'react';
import ClassDetailsCard from '../ClassDetailsCaed/ClassDetailsCard';
import { Helmet } from 'react-helmet';

const ClassesDetails = () => {
    const [classe, setClasse] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-site-mahbubur-rahman1.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasse(data)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Music School || Classes</title>
            </Helmet>
             <div className="grid md:grid-cols-3 gap-5  p-4">
                    {


                        classe.map(populer => <ClassDetailsCard
                            key={populer.id}
                            populer={populer}
                        ></ClassDetailsCard>)
                    }
                </div>
        </div>
    );
};

export default ClassesDetails;