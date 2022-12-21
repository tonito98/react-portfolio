import React from "react";
import email from '../../assets/Projects/email-Template.png';
import loan from '../../assets/Projects/loan-Calculator.png';
import notes from '../../assets/Projects/NoteTaker.png';
import photo from '../../assets/Projects/photo-port.png';
import pizza from '../../assets/Projects/Pizza-Hunt.png';
import zoo from '../../assets/Projects/ZooKeepr.png'



function Project() {
    return(
        <div class= "container px-4">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="card-col">
                <div class="card bg-dark h-100"   >
                    <img src={email} class="card-img" alt="email template project"/>
                    <div class="card-img-overlay">
                     <h5 class="card-title">E-mail</h5>   
                    {/* This is where the github icon and title of project will go */}
                    </div>
                </div>
            </div>
            <div class="card-col">
                <div class="card h-100" >
                    <img src={loan} class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                     <h5 class="card-title">Loan</h5>   
                    {/* This is where the github icon and title of project will go */}
                    </div>
                </div>
            </div>
            <div class="card-col">
                <div class="card bg-dark h-100">
                    <img src={notes} class="card-img" alt="..."></img>
                    <div class="card-img-overlay">   
                    {/* This is where the github icon and title of project will go */}
                    </div>
                </div>
            </div>
            <div class="card-col">
                <div class="card  h-100">
                    <img src={photo} class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                     <h5 class="card-title">Photo-Port</h5>   
                    {/* This is where the github icon and title of project will go */}
                    </div>
                </div>
            </div>
            <div class="card-col h-100">
                <div class="card bg-dark h-100" >
                    <img src={pizza} class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                      
                    {/* This is where the github icon and title of project will go */}
                    </div>
                </div>
            </div>
            <div class="card-col">
                <div class="card bg-dark h-100">
                    <img src={zoo} class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                     <h5 class="card-title">Photo-Port</h5>   
                    {/* This is where the github icon and title of project will go */}
                    </div>
                </div>
            </div>
            



        </div>
        </div>

    );
}

export default Project;