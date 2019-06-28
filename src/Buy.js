import React,{Component} from 'react';
import './App.css';
import {Navbar} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import {GoogleLoginButton} from 'react-social-login-buttons';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import logo from './assets/logo.PNG';
import 'antd/dist/antd.css';

import { Icon, Button } from 'antd';


class Buy extends Component{
    render()
    {
        return(
            <div>
                <Navbar className="nav">
                <img src={logo} alt="logo"></img>
            
                    <Link to="/home"><Button><Icon type="home"/>Home</Button></Link>
                </Navbar>
                  <h1 className="setbold">Choose a payment option</h1>
                 <Link to="/payment"><Button block><Icon type="credit-card"/>Credit card</Button><br/></Link>
                 <Link to="/payment"><Button block><Icon type="account-book"/>Debit card</Button><br/></Link>
                 <Link to="/payment"><Button block><Icon type="money-collect"/>Cash on delivery</Button><br/></Link>
                  


                </div>
        )
    }
}
export default Buy;