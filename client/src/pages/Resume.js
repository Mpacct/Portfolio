import React from 'react'
import resumepdf from "../assets/resume.pdf"
function Test() {

    return (
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Front-End Development</h5>
                            <ul className="card-text">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>JQuery</li>
                                <li>Bootstrap</li>
                                <li>Bulma</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Back-End Development</h5>
                            <ul className="card-text">
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>GraphQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container col-xl-4 col-lg-4 d-flex justify-content-center ">
              <a
                href={resumepdf}
                 className="d-flex justify-content-center btn btn-dark"
                type="button" download>
                Download Resume
              </a>
          </div>
            </div>
    );
}

export default Test;