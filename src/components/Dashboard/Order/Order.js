import React from 'react';
import { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {UserContext} from '../../../App';

const Order = () => {
    const [order, setOrder] = useState();
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newOrder = { ...order }
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        // console.log('submitted')
        // fetch('http://localhost:5000/addOrder',
        // {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(order)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if (data) {
        //          alert('order placed successfully');
        //     }
        // })

        const formData = new FormData()
        console.log(order)
        formData.append('file', file)
        formData.append('name', order.name)
        formData.append('email', order.email)
        formData.append('course', order.course)
        formData.append('details', order.details)
        formData.append('price', order.price)

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    return (
        <section className="container-fluid row" >
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="ml-5">
                <h5 className="text-brand pb-2">Order</h5>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                        <input onBlur={handleBlur} type="text" class="form-control" placeholder="Your name/company's name" name="name" />
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="email" class="form-control" placeholder="Your email" name="email" />
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="text" class="form-control" placeholder="course" name="course" />
                    </div>
                    <div class="form-group">
                    <textarea onBlur={handleBlur} class="form-control" type="text" rows="5" placeholder="Project Details" name="details"></textarea>
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="text"  class="form-control" placeholder="Price" name="price"/>
                    </div>
                    <div class="form-group">
                        <input onChange={handleFileChange} type="file" class="form-control" placeholder="Upload file" />
                    </div>
                    <button type="submit" class="btn btn-dark" style={{width: '100px'}}>Send</button>
                </form>
                </div>
            </div>
        </section>
    );
};

export default Order;