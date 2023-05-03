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
                        <form onSubmit={handleWorkshopRegistration} class="row g-3 text-white fw-bold px-5">
                            <div class="col-md-6">
                                <label for="f-name" class="form-label">First Name</label>
                                <input type="text" required class="form-control" id="f-name" />
                            </div>
                            <div class="col-md-6">
                                <label for="s-name" class="form-label">Second Name</label>
                                <input type="text" required class="form-control" id="s-name" />
                            </div>
                            <div class="col-12">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" required class="form-control" id="email" placeholder='demo@gmail.com' />
                            </div>
                            <div class="col-12">
                                <label for="phone" required class="form-label">Phone</label>
                                <input type="number" class="form-control" id="phone" placeholder='+8801' />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="col-12 mt-5 text-center">
                                <button type="submit" class="s-button">Sign in</button>
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