import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import SearchField from "react-search-field";
import a from './assets/adidas.jpg'
import logo from './assets/logo.PNG';

import {
    Button,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Carousel from '../node_modules/react-bootstrap/Carousel';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Icon, Avatar, Row, Col, Card, Pagination,Menu, Dropdown } from 'antd';
const { Meta } = Card;
const { SubMenu } = Menu;



class Products extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { db, addProduct, pageChanged, wishlistProduct } = this.props;
        
        let pageSize = 8;
        const cardcomponent = db.products.slice((db.page - 1) * pageSize, db.page * pageSize).map((p) => {
            return (
                <Col span={6}>

                    <Card
                        className='col-12'


                        cover={
                            <img
                                alt="example"
                                src={p.image}
                            />
                        }
                        actions={[<button onClick={() => { addProduct(p) }}><Icon type="plus" />Add to cart</button>, <button onClick={() => { wishlistProduct(p) }}><Icon type="heart" />Add to wishlist</button>]}
                    >
                        <Meta

                            title={p.name}
                            description={p.price}
                        />
                    </Card></Col>

            )
        })
        const menu=(<Menu>
    <Link to="/mensfashion"><Menu.Item>Men's Fashion</Menu.Item></Link>
    <Link to="/womensfashion"><Menu.Item>Women's Fashion</Menu.Item></Link>
    <SubMenu title="more">
      <Menu.Item>Kid's Fashion</Menu.Item>
      <Menu.Item>Electronics</Menu.Item>
    </SubMenu>
    
  </Menu>
        )
    

        console.log("db", db);


        return (
            <div>
                <Navbar className="nav">
                    <img src={logo} alt="logo"></img>
                    <SearchField placeholder="Search..." classNames="test-class" />
                
  
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Category <Icon type="down" />
    </a>
  </Dropdown>
  
                    <Link to="/wishlist"><button className="btn-sm btn-dark "><Icon type="heart" />Wishlist</button></Link>
                    <Link to="/cart"><button className="btn-sm btn-dark "><Icon type="shopping-cart" /> Cart</button></Link>
                    <Link to="/orders"><button className="btn-sm btn-dark">Your Orders</button></Link>
                    <Link to="/"><Button size="sm" color="dark"><Icon type="logout"/>Logout</Button></Link>  
                
                </Navbar><br />
                <div >
                    <Carousel >
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src="https://w3layouts.b-cdn.net/wp-content/uploads/2016/08/mrs_mall.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src="https://static.toiimg.com/photo/59632433/.jpg"
                                alt="second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src="https://h4x2w4j2.stackpathcdn.com/wp-content/uploads/2019/01/Zigcy-Lite.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel><br />
                </div>
                <div>
                    <h1 className="setbold">Happy shopping!!</h1>

                    {cardcomponent}
                    <Pagination className="border" defaultCurrent={0} total={db.products.length} onChange={(p) => { pageChanged(p) }} className="align"></Pagination>
                </div>
            
            </div>
        )
    }

}

export default Products;