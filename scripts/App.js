import React from 'react';
import ReactDOM from 'react-dom';
import Intro from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/Introduction.js';
import About from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/About.js'
import WorkExperience from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/WorkExperience.js'
import Education from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/Education.js'
import ContactMe from '/Users/rbo2913/Documents/My Directory/React/MyWebsite/components/ContactMe.js'



class App extends React.Component {

    render(){
        return (
            <div>
                <Intro/>
                <About/>
                <WorkExperience/>
                <Education/>
                <ContactMe/>
            </div>
        )
    }
}

export default App;