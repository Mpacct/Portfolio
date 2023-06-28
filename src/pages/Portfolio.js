import React from 'react'
import './styles/portfolio.css';
import Hello_Fitness from "../assets/Hello_Workout_Screenshot.png"
import Vehicle from "../assets/vehicleAPI.png"
import JATE from "../assets/JATE.png"


function Test() {

    return (
        <section>
            <div>
                <div className="header content-section-heading text-center align-items-center">
                    <h1 className="mb-0">Projects & Technologies</h1>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <a href="https://enigmatic-ocean-17261.herokuapp.com/" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                            <div class="card-body">
                                <h5 class="card-title text-center mb-1">Hello Workout</h5>
                                <p class="card-text mb-2">This is a full stack application where users can easily save their preferred workouts to their personal dashboard.  This allows them to customize their workout routine and make fitness work for them!</p>
                            </div>
                            <img src={Hello_Fitness} class="card-img-top" alt="Hello Workout Screenshot" />
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <a href="https://afternoon-tor-85541.herokuapp.com/" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                            <div class="card-body">
                                <h5 class="card-title text-center mb-1">Just Another Text Editor</h5>
                                <p class="card-text mb-2">This is a progressive web application that allows users to download an application onto their computer.  It is a text editor site where users can enter and save text for review at a later time.</p>
                            </div>
                            <img style={{ width: 400, height: 310 }} src={JATE} class="card-img-top" alt="Hello Workout Screenshot" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-8">
                        <a href="https://joshf2797.github.io/CarMaintenanceApp/" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                            <div class="card-body">
                                <h5 class="card-title text-center mb-1">Vehicle API Search</h5>
                                <p class="card-text mb-5">This project was developed to showcase pulling data from a 3rd party API and displaying it in a browser.</p>
                            </div>
                            <img style={{ width: 400, height: 310 }} src={Vehicle} class="card-img-top mt-2" alt="Hello Workout Screenshot" />
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Test;