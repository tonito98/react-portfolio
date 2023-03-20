import React from "react";

function Resume(){
    return (
        <section id="resume">
            <div class="container">
                <div class= "row align-items-center">
                    <div class ="col">
                        <h5 id="resumeHeaders"> Resume </h5>
                        <p>Download my 
                           <a href="src\assets\ResumePdf\Antonio Anaya Tapia Resume Tech Fall 2022.pdf" download> resume</a> 
                            </p>
                        <h5 id="resumeHeaders">Technical Skills</h5>
                        <p id="techSkills"> Javascript CSS HTML Digital/Graphic Design</p>
                        <p id="techSkillsYrs">1.5yrs 1.5yrs 1.5yrs 4yrs</p>
                        <h5 id="resumeHeaders">Projects</h5>
                        <p id="projectTitles"> Git it Done</p>
                            <p> Retrieved data from a third-party server (GitHub) by using the Fetch API to
                            make requests to server-side APIs.</p>
                        <p id="projectTitles">Humm Playlist</p>
                            <p>Client-side work, storing and generating data entirely within the browser by
                            using local storage.</p>
                        <p id="projectTitles">Password Generator</p>
                            <p>Able to create a multifaceted Javascript application by creating variables that
                            contained different data types in order to create a password, writing conditional
                            statements to add criteria based on the user’s selection, and writing for loops to
                            create a password from the variables that were created.</p>
                        <p id="projectTitles">Run Buddy</p>
                            <p>Able to create a dynamic multi-page website by using html and styling the
                            website with CSS.</p>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Resume;