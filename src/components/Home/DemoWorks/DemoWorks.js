import React from 'react';
import pic1 from '../../../images/carousel-1.png';
import pic2 from '../../../images/carousel-2.png';
import pic3 from '../../../images/carousel-3.png';
import pic4 from '../../../images/carousel-4.png';
import pic5 from '../../../images/carousel-5.png';
import '../DemoWorks/DemoWorks.css';

const DemoWorks = () => {
    return (
        <section className="section-container">
            <div className="p-5">
                <h2 className="text-white text-center ">Here are some of our works</h2>
            </div>
                <div id="demo" class="carousel slide " data-ride="carousel">
                <ul class="carousel-indicators ">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                    <li data-target="#demo" data-slide-to="4"></li>
                </ul>


                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src={pic2} alt="Los Angeles"  class="img-size  d-block mx-auto "/>
                    </div>
                    <div class="carousel-item">
                        <img src={pic1} alt="Chicago" class="img-size d-block mx-auto " />
                    </div>
                    <div class="carousel-item">
                        <img src={pic3} alt="New York" class="img-size d-block mx-auto " />
                    </div>
                    <div class="carousel-item">
                        <img src={pic4} alt="New York" class="img-size d-block mx-auto " />
                    </div>
                    <div class="carousel-item">
                        <img src={pic5} alt="New York" class="img-size d-block mx-auto " />
                    </div>
                </div>


                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        
        </section>
            

    );
};

export default DemoWorks;