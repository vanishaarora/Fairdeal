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
import axios from 'axios';



class Cart extends React.Component {
  state={
db:this.props.db,
deleteProduct:this.props.deleteProduct,
changeQuantity:this.props.changeQuantity,
addToOrders:this.props.addToOrders

   }
   componentDidMount(){
     
  axios.get('/cart').then((res)=>{
    let db = this.state.db;
    db.cart = res.data
    this.setState({db:db})

      console.log("inside cart",this.state.db);
  }     
  )
}
dataBase=(db,deleteProduct, addToOrders, changeQuantity)=>{
  
  return( db.cart?
    <List className="border"
    changeQuantity={changeQuantity}
    itemLayout="horizontal"
    dataSource={db.cart}
    renderItem={item => (
      <List.Item>{[<img src={item.image} className="img_cart"></img>]}
      
        <List.Item.Meta

          title={<a href="https://ant.design">{item.name}</a>}
          description={item.price}
         
        />

        <div>
        
    

          <select onChange={(e) => { changeQuantity(item, e) }}>
            <option>Choose Quantity:</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <Button onClick={deleteProduct}>Delete</Button>
        </div>

      </List.Item>

    )}
  />
    :null)
}
  render(){
    const { db, deleteProduct, addToOrders, changeQuantity }=this.props;
 
   console.log("db",db);
   
    
  return (
    <div>

      <Navbar className="nav">
        <img src={logo} alt="logo"></img>
        <SearchField placeholder="Search..." classNames="test-class" />
        <Link to="/wishlist"><button className="btn-sm btn-dark "><Icon type="heart" />wishlist</button></Link>
        <Link to="/Home"><button className="btn-sm btn-dark "><Icon type="home" />Home</button></Link>
      </Navbar><br />
      <div>
        {
          this.dataBase(db,deleteProduct, addToOrders, changeQuantity)
        }
        <h2 className="align">Total : {db.cart.length && db.cart.reduce((sum,item) => sum + item.price * item.quantity, 0)}</h2>
        <Link to="/buy" onClick={deleteProduct}><Button color="primary" size="lg" block className="border">Buy</Button></Link>
          
      </div>

    </div>
  )

}
}



export default Cart;