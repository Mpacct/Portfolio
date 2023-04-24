import React from 'react'

function Test() {

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <a href="https://github.com/Mpacct/Refactoring-Challenge">
                        <img src="./bookLibraryScreenshot.png" className="card-img-top" alt="Screenshot of booksearch engine project" width="350" height="350"/>
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Refactoring from RESTful API application</h5>
                        <p className="card-text">For this challenge I refactored existing code using RESTful API using the Apollo client.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <a href="https://github.com/joshf2797/CarMaintenanceApp">
                        <img src="./vehicleAPI.png" className="card-img-top" alt="Screenshot of vehicle API search" width="350" height="350"/>
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Vehicle API Search</h5>
                        <p className="card-text">This project was developed to showcase pulling data from a 3rd party API and displaying it in a browser.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;