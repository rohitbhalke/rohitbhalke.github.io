import React from 'react';
import ReactDOM from 'react-dom';
import TypistLib from './TypistLib.js'
import Social from './Social.js'


class About extends React.Component {

    constructor() {
        super();
        this.state = {
            aboutMe: [
                "I'm a developer by heart. I have more than 3 years of experience in both Backend (Node.js) and Frontend (Angular/React).",
                "I have a Bachelors in technology degree from Vishwakarma Institute Of Technology, Pune with 8.5 CPI.",
                "I have keen interest in Coding and problem solving. Whatever the language is, I always try to be perfect in what I deliver.",
                "When not coding, you can find me watching movies/ serials. You could have already figured out that I am big Batman fan."
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
                                <img src="./imgs/Batman.jpg"/>
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