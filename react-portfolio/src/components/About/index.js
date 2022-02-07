import React from 'react';
import '../../assets/css/styles.css'

function About() {
    return (
        <section className='bg-secondary'>
            <div className='row'>
                <h1 className='text-center fw-bolder ms-2 text-light col-4'>About Me</h1>
            </div>
            <div className='row'>
                <img src={require('../../assets/pics/about.png')} alt='pic' className='about-me-pic img-fluid col-4'></img>
                <p className='col text-start'>Hello, I am 23 years old and am currently pursuing the path to becoming a Full-Stack web developer! I have always been passionate about anything computer-related. <br/><br/> Outside from the world of computers I enjoy the outdoors whether it be hiking, swimming, or camping. </p> 
            </div>
        </section>
    );
}

export default About;