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
import { Icon, List } from 'antd';

class Wishlist extends Component {


  render() {
    const { db, deleteProductWishlist, changeQuantityWishlist } = this.props;
    const display = <div>
      <List className="border"
        changeQuantity={changeQuantityWishlist}
        itemLayout="horizontal"
        dataSource={db.wishlist}
        renderItem={item => (
          <List.Item>{[<img src={item.image} className="img_cart"></img>]}
            <List.Item.Meta

              title={<a href="https://ant.design">{item.name}</a>}
              description={item.price}
            
            />
            <div>
              Quantity:
              <select onChange={(e) => { changeQuantityWishlist(item, e) }}>
               
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <Link to="/buy"><Button className="border" >Buy</Button></Link>
              <Button onClick={deleteProductWishlist}>Delete</Button>

            </div>

          </List.Item>


        )}
      />
      <h2 className="align">Total : {db.wishlist.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h2>

    </div>


    return (
      <div>
        <Navbar className="nav">
          <img src={logo} alt="logo"></img>
          <SearchField placeholder="Search..." classNames="test-class" />

          <Link to="/cart"><button className="btn-sm btn-dark "><Icon type="shopping-cart" /> Cart</button></Link>
          < Link to="/Home"><button className="btn-sm btn-dark "> <Icon type="home" />Home</button></Link>
        </Navbar>
        {display}
      </div>
    )
  }




}


export default Wishlist;