import React,{Component} from 'react';
import './App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import {GoogleLoginButton} from 'react-social-login-buttons';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import logo from './assets/logo.PNG';


function Login(props){
    return(
      
      <div className="bg_img" > 
             
      <form className="login-form line" >
    
      <img src={logo} alt="logo"></img><br/>
      
      <FormGroup>
      
     
      <label className="color">Email</label><br/>
      
      <input type="email"  placeholder="Email" className="setwidth" onChange={props.getEmail}/>
      </FormGroup>
      <FormGroup>
      
      <label className="color">Password</label><br/>
      <input type="password" onChange={props.getPass} placeholder="Password" className="setwidth" />
      </FormGroup>
     <Button onClick={props.emailSignIn} className="btn-lg btn-dark btn-block">
      log in
      </Button>
      <div className="text-center pt-3 color">
      Or continue with your social account
      
      </div>
      <FacebookLoginButton className="mt-3 mb-3 icon1" onClick={()=>{props.facebookLogin()}}/>
      <GoogleLoginButton className="mt-3 mb-3 icon2"   onClick={props.googleLogin}/>
      
      
     < div className="text-center">
     <Link to="/signup"> <a href="/sign-up" onClick={props.emailSignUp}>Sign up</a></Link>
           </div>
      </form>
      
      </div>

      )
      
  }
 
  
export default Login;
