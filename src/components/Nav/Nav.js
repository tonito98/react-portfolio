import React from 'react';
import About from '../About';
import {nav, navbar, NavLink } from 'react-bootstrap';


function NavigationBar() {


    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <div class='col-4'>
                <span  >Antonio</span>
            </div>
            <div class='col-8'>
            <ul class='nav justify-content-end'>
                <li class='nav-item'>
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li class="nav-item">
                    <span>Portfolio</span>
                </li>
                <li class="nav-item">
                    <span>Resume</span>
                </li>
                <li class="nav-item">
                    <span>Contact</span>
                </li>
            </ul>
           </div>
         </div>
      </nav>
    );
}

export default NavigationBar;