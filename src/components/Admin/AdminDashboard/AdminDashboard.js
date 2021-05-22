import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ServiceList from '../ServiceList/ServiceList';

const AdminDashboard = () => {
    return (
        <section>
        <div className="container-fluid-row">
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
        </div>

    </section>
    );
};

export default AdminDashboard;