import React from 'react'
import ReactDOM from 'react-dom/client';
import resumepdf from "../assets/Marcus_Paccapaniccia_Resume_2023.pdf"

function Test() {

    return (
        <div>
            <h3>Contact Me</h3>
            <div>
            <p>Email: Paccapanicciam@gmail.com</p> 
            </div>
            <div>
            <a href="https://www.linkedin.com/in/marcus-paccapaniccia/" target="_blank" style={{ color: 'black', textDecoration: 'none' }}> <p>Linkedin: https://www.linkedin.com/in/marcus-paccapaniccia/ </p></a>
            </div>
            <div>
            <a href="https://github.com/Mpacct" target="_blank" style={{ color: 'black', textDecoration: 'none' }}><p> Github: https://github.com/Mpacct </p></a>
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