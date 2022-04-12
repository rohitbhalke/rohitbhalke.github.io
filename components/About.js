import React from 'react';
import ReactDOM from 'react-dom';
import TypistLib from './TypistLib.js'
import Social from './Social.js'


class About extends React.Component {

    constructor() {
        super();
        this.state = {
            aboutMe: [
                "I'm a developer by heart. I have 4 years of industry experience in both Backend (Node.js, java) and Frontend (Angular/React).",
                "I have a Bachelors in technology degree from Vishwakarma Institute Of Technology, Pune with 8.5 CPI.",
                "I have keen interest in Coding and problem solving. Whatever the language is, I always try to be perfect in what I deliver.",
                "When not coding, you can find me watching movies/ serials."
            ]
        }
    }

    render() {
        return (

            <section id="about" className="section-separator">
                <div className="row">
                    <div className="heading">
                        <h1> About Me </h1>
                        <div>
                            <div className="left">
                                <img src="../imgs/rohit.jpg"/>
                            </div>
                            <div className="right lines">
                                {
                                    this.state.aboutMe.map(function(info){
                                        return <p>{info}</p>
                                    })
                                }
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}

export default About;