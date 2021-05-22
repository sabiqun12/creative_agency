import React from 'react';
import client3 from '../../../images/customer-3.png';
import '../ClientFeedBack/ClientFeedBack.css';

const ClientFeedBack = ({ feedback }) => {
    return (  
            <div className="col-md-3">
                <div class="card bg-light customer p-2" style={{ maxWidth: '22rem' }}>
                    <div class="title d-flex align-items-center text-dark ml-3">
                        <img src={client3} alt="customer" style={{ width: '60px' }} />
                        <h6 className="card-title ml-3 mt-3">{feedback.name}
                            <p><small className="font-weight-bold">{feedback.company}</small></p></h6>
                    </div>
                    <div class="mt-1 text-dark">
                        <p class="card-text">{feedback.description}</p>
                    </div>
                </div>
            </div>

        

    );
};

export default ClientFeedBack;