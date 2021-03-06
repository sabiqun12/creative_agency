import React from 'react';
import AllLogo from '../AllLogo/AllLogo';
import Client from '../Client/Client';
import DemoWorks from '../DemoWorks/DemoWorks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <AllLogo></AllLogo>
           <Service></Service>
           <DemoWorks></DemoWorks>
           <Client></Client>
           <Footer></Footer>
        </div>
    );
};

export default Home;