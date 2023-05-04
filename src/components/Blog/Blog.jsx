import React from 'react';
import { Container } from 'react-bootstrap';
import { ImDownload3 } from "react-icons/im";
import Pdf from "react-to-pdf";

const Blog = () => {

    const ref = React.createRef();
    const options = {

    };

    return (
        <div className='mt-5 mb-5'>

            <Container className='text-end mb-4'>
                <Pdf targetRef={ref} options={options} filename="blog.pdf">
                    {({ toPdf }) =>
                        <button onClick={toPdf} className='my-button text-dark bg-white'> <ImDownload3 /> Download Blog</button>
                    }
                </Pdf>
            </Container>

            <Container ref={ref} className='mb-4 pb-4 text-black'>
                <div className='bg-white rounded p-5 mb-4'>
                    <h3 className='fw-bolder fst-italic mb-4'>1. Differences between uncontrolled and controlled components.</h3>
                    <p className='about'>Controlled components are components that are fully controlled by React, meaning that React manages the state and updates the component in response to user input. In Uncontrolled components the state is managed by the browser, and React only provides a way to access and manipulate the state.
                        <br /> <br />
                        Controlled components are often used in forms or input fields, where we want to have complete control over the data that the user enters. Uncontrolled components are typically used in situations where we don't need to track the state of the component, or when the state is managed outside of React, such as with a third-party library.
                        <br /><br />
                        Overall, the main difference between controlled and uncontrolled components is that with controlled components, React manages the state, while with uncontrolled components, the state is managed by the browser or a third-party library.</p>
                </div>
                <div className='bg-white rounded p-5 mb-4'>
                    <h3 className='fw-bolder fst-italic mb-4'>2. How to validate React props using Prop types</h3>
                    <p className='about'>We can validate React props using PropTypes. PropTypes is a typechecking library built into React. PropTypes allows us to specify the expected data type and shape of each prop for a component.
                        <br /><br /> To use PropTypes, we need to import the library and define the propTypes object for the component, specifying the name and type of each prop. When a prop is passed to the component, PropTypes will check if it matches the expected type and shape, and will issue a warning in the console if the prop does not match. This helps catch bugs and ensure that our components receiving the correct props.</p>
                </div>
                <div className='bg-white rounded p-5 mb-4'>
                    <h3 className='fw-bolder fst-italic mb-4'>3. Difference between node-js and express-js</h3>
                    <p className='about'>Node.js is a JavaScript runtime environment that allows us to run JavaScript code on the server. It provides an event-driven, non-blocking I/O model that makes it ideal for building scalable network applications.
                        <br /> Express.js, on the other hand, is a web application framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. Express.js includes features such as routing, middleware, templating, and HTTP request handling that make it easier to build web applications with Node.js.
                        <br /><br />
                        Essentially, Node.js is the platform for running JavaScript on the server, while Express.js is a framework for building web applications on top of Node.js, making it easier and faster to develop web applications with Node.js.</p>
                </div>
                <div className='bg-white rounded p-5 mb-4'>
                    <h3 className='fw-bolder fst-italic mb-4'>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='about'>A custom hook in React is a reusable function that allow us to extract and share stateful logic across multiple components. It can be used for a wide range of purposes, such as managing data fetching, handling form input, or controlling animations.
                        <br />
                        <br />
                        By creating a custom hook, we can encapsulate complex logic in a single function that can be easily reused across multiple components, making our code more modular and easier to maintain. Custom hooks can help us write cleaner, more maintainable code, and avoid repeating the same logic in different components. They provide a powerful tool for organizing and sharing code in React applications, and are widely used in modern React development.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;


