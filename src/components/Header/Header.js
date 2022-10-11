import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-neutral'>    
          <div className="container mx-auto navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
              <Link to='/' className="btn btn-ghost normal-case text-xl"> 
                <img src="assets/quiz-time.jpg" alt="" style={{width: '50px'}} className="mr-2 border-4 rounded-full" />Skill Tester
              </Link>
            </div>
            <div className='navbar-end'>
              <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                  <li><Link to='/'>Topics</Link></li>
                  <li><NavLink to='/Statistics'>Statistics</NavLink></li>
                  <li><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
              </div>
              <div className="dropdown relative">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="text-right dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-32 absolute right-0">
                  <li className='p-2'><Link to='/'>Topics</Link></li>
                  <li className='p-2'><NavLink to='/Statistics'>Statistics</NavLink></li>
                  <li className='p-2'><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Header;