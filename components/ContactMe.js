/**
 * Created by rbo2913 on 17/08/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TypistLib from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/TypistLib.js'
import Social from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/Social.js'

class ContactMe extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <section id="workexperience" className="grey section-separator">
                <div className="row">
                    <div className="heading">
                        <h1>Contact Me</h1>
                    </div>
                    <div id="container">
                        <form action="https://formspree.io/rohitbhalke@gmail.com" method="POST">
                            <div className="group">
                                <label for="name">Name</label>
                                <input className="field text-field" id="name" name="name" type="text" placeholder="Your good Name" required/>
                            </div>
                            <div className="group">
                                <label for="email">E-mail</label>
                                <input className="field text-field" id="email" type="email" required name="_replyto"
                                       placeholder="Your email address, where i can get back to you"/>
                            </div>
                            <div className="group">
                                <label for="message">Message</label>
                                <textarea id="message" className="field textarea-field" required name="message"
                                          ></textarea>
                            </div>
                            <div className="group">
                                <button value="Submit">
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                    Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }

}

export default ContactMe;