import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleBlur = (e) => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }
    const handleSubmit = () => {
        //console.log('submitted')
        fetch('http://localhost:5000/addAdmin',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                 alert('admin added successfully');
            }

        })
    }

    return (
        <section className="container-fluid row" >
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-10">
                <div className="ml-5">
                    <h5 className="text-brand pb-2">Admin Create</h5>

                    <form onSubmit={handleSubmit}>
                        <div class="form-row align-items-center">
                            <div class="col-auto">
                                <input onBlur={handleBlur} type="text" class="form-control mb-2" name="email" placeholder="Email" />
                            </div>
                            <div class="col-auto">
                                 <button type="submit" class="btn btn-success mb-2" style={{width: '100px'}}>Send</button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;