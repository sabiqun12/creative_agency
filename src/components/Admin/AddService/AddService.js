import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddService = () => {
    const [addService, setAddService] = useState();
    const [file, setFile] = useState(null);
   
    const handleBlur = (e) => {
        console.log('hello')
        const newService = { ...addService }
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(addService)
        formData.append('file', file)
        formData.append('name', addService.name)
        formData.append('description', addService.description)
       

        fetch('http://localhost:5000/addService', {
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
            <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
            <div className="ml-5">
                <h5 className="text-brand pb-2">Add Service</h5>
                
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                        <label for="inputEmail4">Service title</label>
                        <input onBlur={handleBlur} type="text" class="form-control" placeholder="Enter title" name="name" />
                    </div>
                    <div class="form-group">
                    <label for="inputDescription">Description</label>
                       <textarea onBlur={handleBlur} class="form-control" rows="6" placeholder="Enter description" name="description"></textarea>
                    </div>
                    <div class="form-group">
                        <input onChange={handleFileChange} type="file" class="form-control" placeholder="Upload file" />
                    </div>
                    <button type="submit" class="btn btn-success" style={{width: '100px'}}>Send</button>
                </form>
               

            </div>
        </div>
    </section>
    );
};

export default AddService;