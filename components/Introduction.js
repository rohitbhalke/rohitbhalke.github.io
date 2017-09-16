import React from 'react';
import ReactDOM from 'react-dom';
import TypistLib from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/TypistLib.js'
import Social from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/Social.js'

var background = 'imgs/Background.jpg';

const styles = {
        background: {
            minHeight: "720px",
            backgroundImage: 'url(' + background + ')',
            height : "100%",
            width: "100%",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            color : "#FFFFFF"
        },
        container : {
            paddingLeft: "45%",
            paddingTop: "180px"
        },
        title : {
            fontSize: "66px",
            lineHeight: "12px",
        },
        role : {
            fontSize: "30px",
            lineHeight: "12px",
        }
    };

class Introduction extends React.Component {

    constructor() {
        super();

        this.state = {
            name : "Rohit Bhalke",
            role: "Full Stack Application Developer",
            greetingMessages : ["Please scroll down to know more","Hi, Nice to meet you", "Have a nice day"],
            social : [
                {
                    link : "Facebook",
                    href : "https://www.facebook.com/arbhalke",
                    className : "round-icons",
                    icons: "fa fa-facebook"

                },
                {
                    link : "LinkedIN",
                    href : "https://www.linkedin.com/in/rohit-bhalke-38524a48/",
                    className : "round-icons",
                    icons: "fa fa-linkedin"

                },
                {
                    link : "Github",
                    href : "https://github.com/rohitbhalke",
                    className : "round-icons",
                    icons: "fa fa-github"

                },
                {
                    link : "Twitter",
                    href : "https://twitter.com/RBhalke",
                    className : "round-icons",
                    icons: "fa fa-twitter"
                }
            ]
        }
    }

    render(){
        return (
                <section className="background">
                    <div className="container">
                        <div className="title">
                            <h1>{this.state.name}</h1>
                        </div>
                        <TypistLib state={this.state}/>
                        <div>
                            <ul className="social-icons">
                                {
                                    this.state.social.map(function(item){
                                        return <Social social={item}/>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Introduction;