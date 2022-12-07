import React from 'react';
import './navbar.css';
import { CiSearch } from 'react-icons/ci'
import { BsPlusCircle, BsGear } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import Gear from '../../images/mdi_gear.png'
import Add from '../../images/add-circle.png'

const NavBar = () => {
  return (
    <div className="evms__navbar_page-wrapper">
      <div className="evms__page-container">
        <div className='evms__navbar'>
            <nav className='evms__navbar_links-container'>
              <a className="evms__navbar_links-logo" href="#">A</a>
              <div>
                <ul className='evms__navbar_links'>
                  <li className='evms__navbar_link evms__navbar_active'><a href="">Dashboard</a></li>
                  <li className='evms__navbar_link'><a href="">Companies</a></li>
                  <li className='evms__navbar_link'><a href="">Projects</a></li>
                  <li className='evms__navbar_link'><a href="">Retainers</a></li>
                </ul>
              </div>
            </nav> 
            <div className='evms__navbar_search-bar'>
              <input type="search" className='evms__navbar_search-input' placeholder='Search i.e company or project name '></input>
              <button className="evms__navbar_search-input_button">
                <CiSearch  className='evms__navbar_search-icon'/>
              </button>
            </div>
       
            <div className="evms__navbar_last-update_container">
              <div className='evms__navbar_last-update_circle'><MdAccessTime className="evms__navbar_clock-icon"/></div>
              <div className='evms__navbar_last-update_text'>
                <h5>Last Update</h5>
                <p>2021-02-17 09:07:46</p>
              </div>
            </div>
            <div className='evms__navbar_tools-container'>
              <div className='evms__navbar_tools'> <img src={Add} alt="add" /></div>
             
              <div className='evms__navbar_tools  gear'><img src={Gear} alt="gear" /></div>
            </div>
          
      
            
           
        </div>
      </div>
    </div>
  )
}

export default NavBar;