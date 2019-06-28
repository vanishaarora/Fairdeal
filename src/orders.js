import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import SearchField from "react-search-field";
import {
    Button,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText
} from 'reactstrap';
import logo from './assets/logo.PNG';
import 'antd/dist/antd.css';
import { List, Avatar, Icon } from 'antd';


function Orders({ db, addToOrders }) {
    return (
        <div>
            <Navbar className="nav">
                <img src={logo} alt="logo"></img>
                <Link to="/Home"><button className="btn-sm btn-dark "><Icon type="home" /> Home</button></Link>
            </Navbar><br />
            <div>
                <List className="border"

                    itemLayout="horizontal"
                    dataSource={db.order}
                    renderItem={item => (
                        <List.Item>{[<img src={item.image} className="img_cart"></img>]}
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.name}</a>}
                                description={item.price}
                            />

                        </List.Item>

                    )}
                />
            </div>
        </div>
    )

}



export default Orders;