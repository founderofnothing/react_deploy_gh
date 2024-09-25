import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (

     
    <div className='navbar'>


      <div className='screen'>
        
      <h1 className='mob'>
            <span className='mobsuresh'>s</span>
            r
        </h1>
      
        </div>   
          
        
        




        <div className='logo'>
        <h1 className='mark'>
            <span className='suresh'>suresh</span>
            rajan
        </h1>
        <div className='hamburgermenu'>  
          <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </div>
       
        </div>
        <div className='menu'>
        <NavLink to="#" exact activeClassName="active">Home</NavLink>
        <NavLink to="/" activeClassName="active">About</NavLink>
        <NavLink to="/" activeClassName="active">project</NavLink>
        <NavLink to="/" activeClassName="active">contact us </NavLink>
        
        </div>

       
       
      
    </div>
  )
}

export default Navbar
