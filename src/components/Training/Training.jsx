import React from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Training = () => {

    const handleWorkshopRegistration = (event) => {
        event.preventDefault()
        toast.success('Your Response Submitted Successfully, We will contact with you !', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-center text-white fw-bold mt-5'>Join Our Next Cooking Class</h1>
            <br />
            <h4 className='text-center text-white fw-bold'>Learn from the best, Register here for weekly cooking workshops</h4>
            <Container className=''>
                <div className="row">
                    <div className="col p-5">
                        <form onSubmit={handleWorkshopRegistration} className="row g-3 text-white fw-bold px-5">
                            <div className="col-md-6">
                                <label htmlFor="f-name" className="form-label">First Name</label>
                                <input type="text" required className="form-control" id="f-name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="s-name" className="form-label">Second Name</label>
                                <input type="text" required className="form-control" id="s-name" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" required className="form-control" id="email" placeholder='demo@gmail.com' />
                            </div>
                            <div className="col-12">
                                <label htmlFor="phone" required className="form-label">Phone</label>
                                <input type="number" className="form-control" id="phone" placeholder='+8801' />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12 mt-5 text-center">
                                <button type="submit" className="s-button">Sign in</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Training;