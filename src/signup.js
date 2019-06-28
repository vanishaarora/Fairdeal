import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from './assets/logo.PNG';





 const Signup=(props)=> {
  return (
    <div className="bg_img">
      <form className="login-form line">
        <img src={logo} alt="logo"></img><br />
        {/* <FormGroup >
          <label className="color">First Name</label><br />
          <input type="name" placeholder="First Name" className="setwidth" required />
        </FormGroup>
        <FormGroup >
          <label className="color">Last Name</label> <br />
          <input type="name" placeholder="Last Name" className="setwidth" />
        </FormGroup> */}
        <FormGroup>
          <label className="color">Email</label><br />
          <input type="email" placeholder="Email" className="setwidth" onChange={props.getEmail}/>
        </FormGroup>
        <FormGroup>
          <label className="color">Password</label><br />
          <input type="password" placeholder="Password" className="setwidth" onChange={props.getPass}/>
        </FormGroup>
        {/* <FormGroup>
          <label className="color">Repeat Password</label><br />
          <input type="password" placeholder="Repeat Password" className="setwidth" />
        </FormGroup> */}
        <Link to="/"><Button className="btn-lg btn-info btn-block" onClick={props.emailSignUp}>
          Sign up
      </Button></Link>
      </form>
    </div>
  )
}
export default Signup;