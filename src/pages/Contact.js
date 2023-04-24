import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Test() {

    return (
        <div>
            <h1>Contact Me</h1>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter your email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Enter your message:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <a href="" className="btn btn-primary">Send!</a>
        </div>
    );
}


export default Test;