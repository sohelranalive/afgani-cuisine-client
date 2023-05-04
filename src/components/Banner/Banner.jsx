import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'

const Banner = () => {
    return (
        <Container className='mt-4 mb-4'>
            <div className='d-md-flex text-white align-items-center pt-4'>
                <div className='col col-md-6 p-4'>
                    <h1 className='text-uppercase fw-bold lh-base'>Welcome to the continent of taste.</h1>
                    <p className='fw-bold about'>The cuisine of Afghanistan is halal and has elements from various places, for example garam masala from India, coriander and mint from Iran, dumplings and noodles from Uzbekistan and Xinjiang in China, and baklava from Turkey</p>
                </div>
                <div className='col col-md-6 p-2'>
                    <Carousel className='w-100'>
                        <Carousel.Item interval={2000} className='w-100' style={{ height: '300px', width: '400px' }}>
                            <img
                                className='img-fluid rounded mx-auto d-block w-100 h-100'
                                src={slider1}
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={2000} className='w-100' style={{ height: '300px', width: '400px' }}>
                            <img
                                className='img-fluid rounded mx-auto d-block w-100 h-100'
                                src={slider2}
                                alt="Second slide"
                            />
                            {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={2000} className='w-100' style={{ height: '300px', width: '400px' }}>
                            <img
                                className='img-fluid rounded mx-auto d-block w-100 h-100'
                                src={slider3}
                                alt="Third slide"
                            />
                            {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slider1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden={true}></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden={true}></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> */}
                </div>
            </div>
        </Container>
    );
};

export default Banner;

