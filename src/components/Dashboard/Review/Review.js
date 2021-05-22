import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = () => {
        //console.log('submitted')
        fetch('http://localhost:5000/addReview',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                 alert('review placed successfully');
            }

        })

    }
    return (
        <section className="container-fluid row" >
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="ml-5">
                    <h5 className="text-brand pb-2">Review</h5>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input onBlur={handleBlur} type="text" class="form-control" placeholder="Company's name" name="company" />
                        </div>

                        <div class="form-group">
                            <input onBlur={handleBlur} type="text" class="form-control" placeholder=" Your name" name="name" />
                        </div>
                        <div class="form-group">
                            <textarea onBlur={handleBlur} class="form-control" rows="5" type="text" placeholder="Description" name="description"></textarea>
                        </div>

                        <button type="submit" class="btn btn-dark" style={{ width: '100px' }}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;