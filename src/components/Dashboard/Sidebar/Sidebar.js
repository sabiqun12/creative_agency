import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faList,faComments,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 " style={{height:"100vh"}}>
            <ul className="list-unstyled">   
               <li>
                    <Link to="/order" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/servicelist" className="text-dark">
                        <FontAwesomeIcon icon={faList} /> <span>Servicelist</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-dark">
                        <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                    </Link>
                </li>        
            </ul>
            <div>
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;