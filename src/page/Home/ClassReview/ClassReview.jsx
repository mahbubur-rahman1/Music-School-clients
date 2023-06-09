import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClassCard from '../ClassCard/ClassCard';

const ClassReview = () => {
    const [classe, setClasse] = useState([]);

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                setClasse(data)
            })
    }, [])
    return (
        <div>
            

            <div className="grid md:grid-cols-3 gap-5 mt-10 p-4">
                    {


                        classe.slice(0, 6).map(populer => <ClassCard
                            key={populer.id}
                            populer={populer}
                        ></ClassCard>)
                    }
                </div>
        </div>
    );
};

export default ClassReview;