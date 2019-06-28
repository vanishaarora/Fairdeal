import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import logo from './assets/logo.PNG';
import 'antd/dist/antd.css';

import { Icon, Button } from 'antd';


class payment extends Component{
    render()
    {
        return(
            <div>

                    <h1 className="setbold">Thank you for shopping with us!</h1>
                    <Link to="/home"><Button block><Icon type="home"/>Home</Button></Link>
                 


                </div>
        )
    }
}
export default payment;