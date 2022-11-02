import React from 'react';



function NavigationBar() {


    return (
      <nav class="navbar  bg-primary">
        <div class="container-fluid">
            <div class='col-4'>
                <h5>Antonio</h5>
            </div>
            <div class='col-8'>
            <ul class='nav justify-content-center'>
                <li class='nav-item'>
                    <a class="nav-link" href="#about">About me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#resume">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
           </div>
         </div>
      </nav>
    );
}

export default NavigationBar;