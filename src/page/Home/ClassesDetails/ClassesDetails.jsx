import React, { useEffect, useState } from 'react';
import ClassDetailsCard from '../ClassDetailsCaed/ClassDetailsCard';

const ClassesDetails = () => {
    const [classe, setClasse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasse(data)
            })
    }, [])
    return (
        <div>
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