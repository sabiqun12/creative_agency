import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ServiceList = () => {
    return (
        <section className="container-fluid row" >
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-10">
                <div className="ml-5">
                    <h5 className="text-brand pb-2">Service list</h5>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </section>

    );
};

export default ServiceList;