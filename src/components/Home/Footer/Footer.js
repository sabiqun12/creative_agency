import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row p-5">
                <div className="col-md-6">
                    <h2 className="font-weight-bold">Let us handle your <br></br>project,professionally.</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Porro laudantium dolor dolorum! Possimus, maiores ullam.</p>

                </div>
                <div className="col-md-6 ">
                    <form className="form">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your email address" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your name/company's name" />
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" rows="7" placeholder="Your message"></textarea>
                        </div>
                        <div>
                            <button class="brand-color text-white mt-2">Send</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Footer;