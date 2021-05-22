import React, { useEffect, useState } from 'react';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';

const clientData = [
    {
        id: 1,
        clientImg: client1,
        clientName: 'Nash Patrik',
        clientPosition:'CEO, Manpol' ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit, eveniet dolo."
    },
    {
        id: 2,
        clientImg: client2,
        clientName: 'Mirrium Baron',
        clientPosition:'CEO, Manpol' ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit, eveniet dolo."
    },
    {
        id: 3,
        clientImg: client3,
        clientName:'Bria Malonee' ,
        clientPosition: 'CEO, Manpol' ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit, eveniet dolo."
    }
]


const Client = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect( () => {
     fetch('http://localhost:5000/reviews')
     .then(res => res.json())
     .then(data => setFeedback(data))
 }, [])
    return (
        <section>
            <div className="text-center mt-5 p-4">
                <h2 className="font-weight-bold">Clients Feedback</h2>
            </div>
              <div className="row d-flex justify-content-center">
            
            {
               feedback.map( feedback => <ClientFeedBack feedback ={feedback} key={feedback._id} ></ClientFeedBack>)
            }
            
        </div>

        </section>
      
    );
};

export default Client;