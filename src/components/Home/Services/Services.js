import React from 'react';
import {Link} from "react-router-dom";
import '../Services/services.css';

const Services = ({ data }) => {

    return (
        <div className="col-md-4 text-center ">
            <Link to="/order"><img style={{height: '74px', width:'74px'}} src={data.image} alt=""/></Link> 
            <h6 style={{color: '#3A4256'}} className="mt-3 mb-3">{data.name}</h6>
            <p className="text-secondary">{data.detail}</p>
            
        </div>

    );
};
// style={{border: '0px', backgroundColor: 'white'}}>
export default Services;