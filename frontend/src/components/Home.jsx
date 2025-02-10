import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import Task from './Routingfolder/Task';
import Performance from './Routingfolder/Performance';
import Management from './Routingfolder/Management';
import Commercial from './Routingfolder/Commercial';
import './Routingfolder/Home.css'
function Home() {
    const [showMenu, setShowMenu] = useState(true);

    return (
        <div>
            <nav className="navbar row" style={{backgroundColor:'#D9EAFD'}}>
                <div className="container-fluid col-2">
                    <a className="navbar-brand p-2" href="#" onClick={() => setShowMenu(true)}>
                        <i className="bi bi-sliders"></i>
                    </a>
                </div>
                <div className={`container-fluid col-10 second-button-container ${showMenu ? "" : "move-left"}`}>
                    <a className="navbar-brand" href="#" onClick={() => setShowMenu(prev => !prev)}>
                        <i className="bi bi-skip-backward-fill"></i>
                    </a>
                </div>
            </nav>
            <div className='row' style={{backgroundColor:'#BCCCDC'}}>
                <div className='col-2'>
                    <ul className='list-unstyled list-group'>
                        <li 
                            className='list-group-item mylist d-flex align-items-center'
                            style={{
                                width: showMenu ? '210px' : '50px', 
                                backgroundColor:'#9AA6B2',
                                transition: 'width 0.3s ease'
                            }}
                        >
                            <span>📋</span> 
                            {showMenu && <Link to={'/task'} className="text-light text-decoration-none ms-2">Task</Link>}
                        </li>
                        <li 
                            className='list-group-item mylist d-flex align-items-center'
                            style={{
                                width: showMenu ? '210px' : '50px', 
                                backgroundColor:'#9AA6B2',
                                transition: 'width 0.3s ease'
                            }}
                        >
                            <span>📊</span>  
                            {showMenu && <Link to={'/performance'} className="text-light text-decoration-none ms-2">Performance</Link>}
                        </li>
                        <li 
                            className='list-group-item mylist d-flex align-items-center'
                            style={{
                                width: showMenu ? '210px' : '50px', 
                                backgroundColor:'#9AA6B2',
                                transition: 'width 0.3s ease'
                            }}
                        >
                            <span>⚙️</span>   
                            {showMenu && <Link to={'/management'} className="text-light text-decoration-none ms-2">Management</Link>}
                        </li>
                        <li 
                            className='list-group-item mylist d-flex align-items-center'
                            style={{
                                width: showMenu ? '210px' : '50px', 
                                backgroundColor:'#9AA6B2',
                                transition: 'width 0.3s ease'
                            }}
                        >
                            <span>💼</span>  
                            {showMenu && <Link to={'/commercial'} className="text-light text-decoration-none ms-2">Commercial</Link>}
                        </li>
                    </ul>
                </div>
                <div className={`col-10 routes-container ${showMenu ? "" : "move-left"}`}>
                    <Routes>
                        <Route path={'/task'} element={<Task />} />
                        <Route path={'/performance'} element={<Performance />} />
                        <Route path={'/management'} element={<Management />} />
                        <Route path={'/commercial'} element={<Commercial />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Home;
