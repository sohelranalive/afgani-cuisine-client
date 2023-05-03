import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='pb-5'>
            <Container className='bg-white rounded'>
                <footer className="pt-5 pb-4 px-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className='my-color fw-bold'>Afghani Cuisine</h4>
                                <p>Authentic Afghan Restaurant</p>
                                <p>123 Main Street</p>
                                <p>(123) 456-7890</p>
                                <p>info@afghanicuisine.com</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Follow Us</h4>
                                <ul className="list-unstyled">
                                    <li className='mb-2'><Link to='/' className='text-decoration-none my-color'><FaFacebook /> Facebook</Link></li>
                                    <li className='mb-2'><Link to='/' className='text-decoration-none my-color'><FaInstagram /> Instagram</Link></li>
                                    <li className='mb-2'><Link to='/' className='text-decoration-none my-color'><FaTwitter /> Twitter</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>Subscribe to Our Newsletter</h4>
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Enter your email address" aria-label="Email Subscription" aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="my-button" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                                <p>Stay up to date with our latest news and promotions!</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;