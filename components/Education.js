/**
 * Created by rbo2913 on 13/08/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TypistLib from './TypistLib.js'
import Social from './Social.js'


class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            education : [
                {
                    id : 1,
                    name : 'Computer Science and Engineering',
                    span : 'June 2010 - May 2017',
                    role : 'Vishwakarma Institute Of Technology, Pune',
                    description : "Learnt lot of computer things"
                },
                {
                    id : 2,
                    name : 'HSC',
                    span : '2008 - 2010',
                    role : 'Mahatma Gandhi College, Ahmedpur',
                    description : "Learnt lot of computer things"
                },
                {
                    id : 3,
                    name : 'SSC',
                    span : '2007 - 2008',
                    role : 'Yeshwant Vidyalaya, Ahmedpur',
                    description : "Learnt lot of computer things"
                }

            ]
        }
    }

    render(){
        return (
            <section id="workexperience" className="section-separator">
                <div className="row">
                    <div className="heading">
                        <h1>Education</h1>
                    </div>
                    <div className="">
                        {
                            this.state.education.map(function(education){
                                return <ListOfSchools key={education.id} school={education}/>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }

}


class ListOfSchools extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="timeline">
                <div className="timeline-icon">
                    <i className="fa fa-graduation-cap"/>
                </div>
                <div className="timeline-head companyName">
                    <h3>{this.props.school.name}</h3>
                    <p>
                        {this.props.school.span}
                    </p>
                </div>
                <div className="timeline-content">
                    <h4>{this.props.school.role}</h4>
                    <p>{this.props.school.description}
                    </p>
                </div>
                <div className="clear"></div>
            </div>
        )
    }

}

export default Education;