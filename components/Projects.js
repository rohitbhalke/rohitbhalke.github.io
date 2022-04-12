
import React from 'react';

class Projects extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <section id="projects" className="grey section-separator">
                <div className="row row-eq-height">
                    <div className="col-xs-12 col-sm-12 col-lg-6" style="margin-bottom: 2em;">
                        <div className="block-grey" style="height: 100%;">
                            <div className="row">
                                <div className="col-xs-8"><p className="font-weight-m">Full Stack Developer</p>
                                    <div><a href="https://please.com">Please.com</a><br/>
                                        <div className="duration font-weight-m">June 2018 - December 2018 (7 months)
                                        </div></div>
                                </div>
                                <div className="col-xs-4"><img src="" className="pull-right"
                                                               alt="Please.com logo" height="70" width="70"/></div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12"><p>Please.com is a decentralized, open-source platform for
                                    booking pre-defined trips curated by local experts. I work on the backend (Node.js),
                                    frontend (React.js) &amp; smart contracts (on Ethereum)</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-6" style="margin-bottom: 2em;">
                        <div className="block-grey" style="height: 100%;">
                            <div className="row">
                                <div className="col-xs-8"><p className="font-weight-m">Backend Lead</p>
                                    <div><a href="https://www.rentomojo.com">RentoMojo</a><br/>
                                        <div className="duration font-weight-m">August 2016 - May 2018 (1 year 10
                                            months)
                                        </div></div>
                                </div>
                                <div className="col-xs-4"><img src="" className="pull-right"
                                                               alt="RentoMojo logo" height="70" width="70"/></div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12"><p>I work on the backend as well as DevOps. I contribute in
                                    building Microservices written in Node.js/TypeScript which run on either AWS Lambda
                                    or Kubernetes. I also manage the AWS &amp; Azure infrastructure along with the CI/CD
                                    pipeline</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Projects;
