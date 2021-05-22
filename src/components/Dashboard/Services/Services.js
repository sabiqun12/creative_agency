import React, { useEffect, useState } from 'react';
import CustomerService from '../CustomerService/CustomerService';
import Sidebar from '../Sidebar/Sidebar';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(allData => setServices(allData))
    }, [])


    return (
        <section className="container-fluid row" >
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="ml-5">
                    <h5 className="text-brand pb-2">service</h5>
                    <div className="d-flex justify-content-center ">
                    <div className="w-75 h-100 row mt-5 pt-5">
                    {
                        services.map(data => <CustomerService data={data}></CustomerService>)
                    }
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;