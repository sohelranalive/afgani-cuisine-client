import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'

const Banner = () => {
    return (
        <div className='bg-custom-color'>
            <Container className='d-md-flex gap-4 align-items-center pt-4 pb-4'>
                <div className='col col-md-6 text-white p-4'>
                    <h1 className='text-uppercase fw-bold lh-base'>Welcome to the continent of taste.</h1>
                    <p className='fw-bold'>The cuisine of Afghanistan is halal and has elements from various places, for example garam masala from India, coriander and mint from Iran, dumplings and noodles from Uzbekistan and Xinjiang in China, and baklava from Turkey</p>
                </div>
                <div className='col col-md-6 p-4'>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 rounded"
                                src={slider1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 rounded"
                                src={slider2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100 rounded"
                                src={slider3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default Banner;