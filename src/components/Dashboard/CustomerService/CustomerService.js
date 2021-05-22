import React from 'react';

const CustomerService = ({data}) => {
    return (
        <div className="col-md-4 ">
       <div class="card-deck">
     <div class="card">
    <img src={data.file.name}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{data.name}</h5>
      <p class="card-text">{data.description}</p>
    </div>
  </div>
  </div>
  </div>
  

    );
};

export default CustomerService;