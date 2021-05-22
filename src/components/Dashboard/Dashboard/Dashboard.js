import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import Order from '../Order/Order';
import { UserContext } from '../../../App';




const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <div className="container-fluid-row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                   
                </div>
            </div>

        </section>
    );
};

export default Dashboard;