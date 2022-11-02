import React from "react";
import coverImage from "../../assets/Cover/cover-image.png"

function About() {
    return (
        <section id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col">
                        <img src={coverImage} className="my-2" style={{width: "100%" }} alt='cover' class='image-fluid' />
                    </div>
                    <div class="col">
                    <h6 class='text-center' id="who">Who am I?</h6>
                    <p>Juchiiti táati k’éri arhikwarhisti Jose Luis. Ima Cojumatlán anapuesti ka irekasti Cojumatlán. Juchiti táati k’éri mítisti itsuku p’ikuni vacaechani.</p>
                    </div>
               </div>
            </div>
        </section>
    )
}

export default About;