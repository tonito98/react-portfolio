import React from "react";
import coverImage from "../../assets/Cover/cover-image.png"

function About() {
    return (
        <section>
            <h1 class='text-center' id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{width: "50%" }} alt='cover' />
        </section>
    )
}

export default About;