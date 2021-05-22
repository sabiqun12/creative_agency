import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlusSquare,faList,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../Dashboard/Sidebar/Sidebar.css';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 " style={{height:"100vh"}}>
            <ul className="list-unstyled">  
               <li>
                    <Link to="/servicelist" className="text-dark">
                        <FontAwesomeIcon icon={faList} /> <span>Servicelist</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-dark">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>   
               
            </ul>
            
        </div>
    );
};

export default AdminSidebar;