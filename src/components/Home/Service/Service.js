import React, { useState } from 'react';
import Services from '../Services/Services';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';

const Service = () => {
    const serviceData = [
        {
            id : 1,
            image: service1, 
            name: 'Web Design',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, provident'
        },
        {
            id : 2,
            image: service2,
            name: 'Graphic Design',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, provident'
        },
        {
            id : 3,
            image: service3,
            name: 'Web Development',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, provident'
        }
    ]
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            <h2>Provide awesome services</h2>
        </div>
        <div className="d-flex justify-content-center ">
        <div className="w-75 h-100 row mt-5 pt-5">
            {
                 serviceData.map( (data, index) => <Services data={data}></Services>)
            }

        </div>
    </div>
    </section>
       
    );
};

export default Service;