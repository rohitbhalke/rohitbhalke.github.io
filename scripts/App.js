import React from 'react';
import ReactDOM from 'react-dom';
import Intro from '../components/Introduction.js';
import About from '../components/About.js'
import WorkExperience from '../components/WorkExperience.js'
import Education from '../components/Education.js'
import ContactMe from '../components/ContactMe.js'



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