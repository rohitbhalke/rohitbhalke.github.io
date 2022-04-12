/**
 * Created by rbo2913 on 13/08/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TypistLib from './TypistLib.js'
import Social from './Social.js'


class WorkExperience extends React.Component {

    constructor() {
        super();
        this.state = {
            companies : [
                {
                    id : 1,
                    name : 'Springer Nature',
                    span : 'June 2017 - July 2018',
                    role : 'FullStack Developer',
                    description : ["Help stakeholders visualise and identify areas of improvement. Making it accessible to stakeholders when needed. Pulling together metrics from vaious teams to show perfomance at a domain level. "]
                },
                {
                    id : 2,
                    name : 'CDK Global',
                    span : 'June 2014 - June 2017',
                    role : 'NodeJs/Javascript Developer',
                    description : ["1. Developed the next generation web platform and Javascript framework which will be used by approximately ten thousand users.",
                        "2. Developed CMS platform for maintaining the data flowing into the websites.",
                        "3. Achieved continuous delivery and deployment of applications.",
                        "4.Developed high-performance, robust, mobile ready UI features for automotive manufacturer and dealership online marketing presence."]
                }

            ]
        }
    }

    render() {
        return (
            <section id="workexperience" className="grey section-separator">
                <div className="row">
                    <div className="heading">
                        <h1>Work Experience</h1>
                    </div>
                    <div className="">
                        {
                            this.state.companies.map(function(company){
                                return <ListOfCompanies key={company.id} company={company}/>
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}



class ListOfCompanies extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="timeline">
            <div className="timeline-head companyName">
                    <h3>{this.props.company.name}</h3>
                    <p>
                        {this.props.company.span}
                    </p>
                </div>
                <div className="timeline-icon">
                    <i className="fa fa-briefcase"/>
                </div>
                <div className="timeline-content">
                    <h4>{this.props.company.role}</h4>
                    {
                        this.props.company.description.map(function(achievements){
                            return <p className="companydescription">{achievements}</p>
                        })
                    }
                </div>
            </div>
        )
    }

}


export default WorkExperience;
