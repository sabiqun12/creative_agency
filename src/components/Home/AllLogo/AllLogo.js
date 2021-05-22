import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import air from '../../../images/logos/airbnb.png';

const AllLogo = () => {
    const styleImg = {
        width: '140px',
        height: '36px'
    }
    return (
        <div className="row mt-5 d-flex justify-content-center p-5">
            <div className="col-md-2 ml-5">
              <img style={styleImg} src={slack} alt="slack"/>
            </div>
            <div className="col-md-2">
              <img style={styleImg} src={google} alt="google"/>
            </div>
            <div className="col-md-2">
              <img style={styleImg} src={uber} alt="uber"/>
            </div>
            <div className="col-md-2">
              <img style={styleImg} src={netflix} alt="netflix"/>
            </div>
            <div className="col-md-2">
              <img style={styleImg} src={air} alt="airnob"/>
            </div>

        </div>
    );
};

export default AllLogo;