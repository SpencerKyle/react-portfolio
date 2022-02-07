import React from 'react';

function Footer() {
    return (
        <section className='bg-secondary border-top border-dark border-2'>
            <ul className='text-light list-unstyled list-inline p-4'>
                <li className='list-inline-item'>
                    <a href="https://github.com/SpencerKyle">
                        <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a href="https://www.linkedin.com/in/spencer-k-544225112/">
                        <img src="https://img.icons8.com/material-outlined/48/000000/linkedin--v1.png"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Footer;