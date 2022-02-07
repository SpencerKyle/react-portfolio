import React from 'react';
import runBuddy from '../../assets/pics/portfolio/run-buddy.png'
import bookWorm from '../../assets/pics/portfolio/book-worm.png'
import passGen from '../../assets/pics/portfolio/pass-gen.png'
import taskinator from '../../assets/pics/portfolio/taskinator.png'
import gitIt from '../../assets/pics/portfolio/git-it-done.png'



function Portfolio() {
    return (
        <section className='p-5 bg-secondary'>
                <div className="row p-3"> 
                    <div className='col-4'>
                        <div className='card'>
                            <a href='https://spencerkyle.github.io/git-it-done/'>
                            <img src={gitIt} className="card-img-top" alt=""></img>
                            </a>
                            <div className='card-body'>
                                <h5 className='card-title'>Git it Done</h5>
                                <p className='card-text'>html, css, JavaScript</p>
                                <a href='https://github.com/SpencerKyle/git-it-done' className='btn btn-secondary'>Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card'>
                            <a href='https://spencerkyle.github.io/password-generator/'>
                                <img src={passGen} className="card-img-top" alt=""></img>
                            </a>
                            <div className='card-body'>
                                <h5 className='card-title'>Password Generator</h5>
                                <p className='card-text'>Javascript</p>
                                <a href='https://github.com/SpencerKyle/password-generator' className='btn btn-secondary'> Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card'>
                            <a href='https://spencerkyle.github.io/Early-Bird/'>
                                <img src="https://user-images.githubusercontent.com/89811148/139706941-cbef3dca-d492-4409-8782-9b9a68a18b60.PNG" className="card-img-top" alt=""></img>
                            </a>
                            <div className='card-body'>
                                <h5 className='card-title'>Early Bird</h5>
                                <p className='card-text'>html, css, JavaScript, API</p>
                                <a href='https://github.com/SpencerKyle/Early-Bird' className='btn btn-secondary'>Github Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-3"> 
                    <div className='col-4'>
                        <div className='card'>
                            <a href='https://spencerkyle.github.io/run-buddy/'>
                                <img src={runBuddy} className="card-img-top" alt=""></img>
                            </a>
                            <div className='card-body'>
                                <h5 className='card-title'>Run Buddy</h5>
                                <p className='card-text'>html, css</p>
                                <a href='https://github.com/SpencerKyle/run-buddy' className='btn btn-secondary'>Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card'>
                            <a href='https://agile-bastion-07410.herokuapp.com/'>
                                <img src={bookWorm} className="card-img-top" alt=""></img>
                            </a>
                            <div className='card-body'>
                                <h5 className='card-title'>Book Worm</h5>
                                <p className='card-text'>JavaScript, node.js, SQL</p>
                                <a href='https://github.com/SpencerKyle/BookWorm/' className='btn btn-secondary'>Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card'>
                            <a href='https://spencerkyle.github.io/taskinator/'>
                                <img src={taskinator} className="card-img-top" alt=""></img>
                            </a>
                            <div className='card-body'>
                                <h5 className='card-title'>Taskinator</h5>
                                <p className='card-text'>JavaScript, html, css, API</p>
                                <a href='https://github.com/SpencerKyle/taskinator' className='btn btn-secondary'>Github Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Portfolio;