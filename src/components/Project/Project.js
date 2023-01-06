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
                    <img src={email} class="card-img" alt="email template project"
                    />
                   
                    <div class="card-img-overlay" id="repo">
                     <button class=" btn btn-light btn-circle btn-md">  
                       <a class='link' href='https://github.com/tonito98/Antonio-An-email-template' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                         </svg>
                        </a>
                     </button> 
                     <h3>
                        E-mail Template
                     </h3>
                    </div>

                    <div class="card-img-overlay" id="webpage">
                     <a class='stretched-link' href='https://tonito98.github.io/Antonio-An-email-template/' target='_blank' rel='noreferrer'> </a>
                    </div>
                    
                    
                </div>
            </div>
            <div class="card-col">
                <div class="card h-100" >
                    <img src={loan} class="card-img" alt="..."></img>
                    <div class="card-img-overlay" id="repo">
                    <button class=" btn btn-light btn-circle btn-md"> 
                       <a class='link' href='https://github.com/tonito98/Loan-Calculator' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                         </svg>
                        </a>
                     </button>
                     <h3>
                        Loan Calculator
                     </h3> 
                    </div>

                    <div class="card-img-overlay" id="webpage">
                     <a class='stretched-link' href='https://tonito98.github.io/Loan-Calculator/' target='_blank' rel='noreferrer'> </a>
                    </div>
                </div>
            </div>
            <div class="card-col">
                <div class="card bg-dark h-100">
                    <img src={notes} class="card-img" alt="..."></img>
                    <div class="card-img-overlay" id="repo">
                    <button class=" btn btn-light btn-circle btn-md"> 
                       <a class='link' href='https://github.com/tonito98/Note-Taker' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                         </svg>
                        </a>
                     </button>
                     <h3>
                        Notes App
                     </h3> 
                    </div>
                    <div class="card-img-overlay" id="webpage">
                     <a class='stretched-link' href='https://notes-8102022.fly.dev/' target='_blank' rel='noreferrer'> </a>
                    </div>
                </div>
            </div>
            <div class="card-col">
                <div class="card  h-100">
                    <img src={photo} class="card-img" alt="..."></img>
                    <div class="card-img-overlay" id="repo">
                    <button class=" btn btn-light btn-circle btn-md"> 
                       <a class='link' href='https://github.com/tonito98/photo-port' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                         </svg>
                        </a>
                     </button>
                     <h3>
                        Photo-port
                     </h3> 
                    </div>
                    <div class="card-img-overlay" id="webpage">
                     <a class='stretched-link' href='https://tonito98.github.io/photo-port/' target='_blank' rel='noreferrer'> </a>
                    </div>
                </div>
            </div>
            <div class="card-col h-100">
                <div class="card bg-dark h-100" >
                    <img src={pizza} class="card-img" alt="..."></img>
                    <div class="card-img-overlay" id="repo">
                    <button class=" btn btn-light btn-circle btn-md"> 
                       <a class='link' href='https://github.com/tonito98/pizza-go' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                         </svg>
                        </a>
                     </button>
                     <h3>
                        Pizza-Hunt
                     </h3> 
                    </div>
                    <div class="card-img-overlay" id="webpage">
                     <a class='stretched-link' href='https://pizza-go-2022.fly.dev' target='_blank' rel='noreferrer'> </a>
                    </div>
                </div>
            </div>
            <div class="card-col">
                <div class="card bg-dark h-100">
                    <img src={zoo} class="card-img" alt="..."></img>
                    <div class="card-img-overlay" id="repo">
                    <button class=" btn btn-light btn-circle btn-md"> 
                       <a class='link' href='https://github.com/tonito98/Zoo-it' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                         </svg>
                        </a>
                     </button>
                     <h3>
                        ZooKeepr
                     </h3> 
                    </div>
                    <div class="card-img-overlay" id="webpage">
                     <a class='stretched-link' href='https://zoo-it.fly.dev/' target='_blank' rel='noreferrer'> </a>
                    </div>
                </div>
            </div>
            



        </div>
        </div>


    );
}

export default Project;