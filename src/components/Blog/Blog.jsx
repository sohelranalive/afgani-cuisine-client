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
                    <h3 className='fw-bolder fst-italic'>1. Differences between uncontrolled and controlled components.</h3>
                    <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque minus hic, earum quae unde libero dolorum nihil autem magnam, error nostrum facere eius consectetur sit! Ullam, dicta ut laborum laboriosam animi deserunt minima aut soluta vel eum, ea voluptate placeat modi corrupti, consectetur fuga quibusdam provident recusandae magnam fugit pariatur odit! </p>
                    <br />
                    <p>Ea quos quasi dicta tenetur amet, cumque, perspiciatis architecto quae neque distinctio nemo nam accusamus ipsa. Temporibus, deserunt odio hic nesciunt, dicta vitae facere dolorem quia necessitatibus reprehenderit ullam quos in alias mollitia consectetur labore sit eligendi! Dolores officiis impedit aliquam vero, nemo laudantium quasi recusandae eum aut.</p>
                </div>
                <div className='bg-white rounded p-5 mb-4'>
                    <h3 className='fw-bolder fst-italic'>2. How to validate React props using Prop types</h3>
                    <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque minus hic, earum quae unde libero dolorum nihil autem magnam, error nostrum facere eius consectetur sit! Ullam, dicta ut laborum laboriosam animi deserunt minima aut soluta vel eum, ea voluptate placeat modi corrupti, consectetur fuga quibusdam provident recusandae magnam fugit pariatur odit! Ea quos quasi dicta tenetur amet, cumque, perspiciatis architecto quae neque distinctio nemo nam accusamus ipsa. Temporibus, deserunt odio hic nesciunt, dicta vitae facere dolorem quia necessitatibus reprehenderit ullam quos in alias mollitia consectetur labore sit eligendi! Dolores officiis impedit aliquam vero, nemo laudantium quasi recusandae eum aut.</p>
                </div>
                <div className='bg-white rounded p-5 mb-4'>
                    <h3 className='fw-bolder fst-italic'>3. Difference between node-js and express-js</h3>
                    <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque minus hic, earum quae unde libero dolorum nihil autem magnam, error nostrum facere eius consectetur sit! Ullam, dicta ut laborum laboriosam animi deserunt minima aut soluta vel eum, ea voluptate placeat modi corrupti, consectetur fuga quibusdam provident recusandae magnam fugit pariatur odit! </p>
                    <br />
                    <p>Ea quos quasi dicta tenetur amet, cumque, perspiciatis architecto quae neque distinctio nemo nam accusamus ipsa. Temporibus, deserunt odio hic nesciunt, dicta vitae facere dolorem quia necessitatibus reprehenderit ullam quos in alias mollitia consectetur labore sit eligendi! Dolores officiis impedit aliquam vero, nemo laudantium quasi recusandae eum aut.</p>
                </div>
                <div className='bg-white rounded p-5 mb-4'>
                    <h3 className='fw-bolder fst-italic'>4. What is a custom hook, and why we will create a custom hook?</h3>
                    <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque minus hic, earum quae unde libero dolorum nihil autem magnam, error nostrum facere eius consectetur sit! Ullam, dicta ut laborum laboriosam animi deserunt minima aut soluta vel eum, ea voluptate placeat modi corrupti, consectetur fuga quibusdam provident recusandae magnam fugit pariatur odit! Ea quos quasi dicta tenetur amet, cumque, perspiciatis architecto quae neque distinctio nemo nam accusamus ipsa. Temporibus, deserunt odio hic nesciunt, dicta vitae facere dolorem quia necessitatibus reprehenderit ullam quos in alias mollitia consectetur labore sit eligendi! Dolores officiis impedit aliquam vero, nemo laudantium quasi recusandae eum aut.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;


