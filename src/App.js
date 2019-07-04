import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Login from './login';
import Wishlist from './wishlist';
import Cart from './cart';
import Signup from './signup';
import axios from 'axios';
import Products from './Home';
import * as firebase from "firebase/app";
import "firebase/auth";
import Buy from './Buy';
import payment from './payment';
import Orders from './orders';
import Mensfashion from './mensfashion';
import Womensfashion from './womensfashion';

var firebaseConfig = {
  apiKey: "AIzaSyDfJ3FAIhDxxS5CVWrXwGQasmZzycJ46yQ",
  authDomain: "shoppingstore-d92ba.firebaseapp.com",
  databaseURL: "https://shoppingstore-d92ba.firebaseio.com",
  projectId: "shoppingstore-d92ba",
  storageBucket: "shoppingstore-d92ba.appspot.com",
  messagingSenderId: "714860861290",
  appId: "1:714860861290:web:bf8638cc94e35130"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.state.db = {
      page: 1,
      products: [],
      cart: [],
      wishlist: [],
      order: []
    }

  }

  componentDidMount() {
    axios.get('http://5cfe5a23ca949b00148d3ff2.mockapi.io/products')
      .then((res) => {
      
         let db = this.state.db;
         db.products = res.data;
        
        this.setState({
          db:db
          
        })
        console.log(this.state.db.products);
     
      })
        
  }
  
  googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName, user.email);
      this.props.history.push('/home')

      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  facebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      this.props.history.push('/home')

      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  getEmail = (e) => {
    let email = e.target.value;
    this.setState(
      {
        email: email
      }
    )
  }

  getPass = (e) => {
    let pass = e.target.value;
    this.setState(
      {
        pass: pass
      }
    )
  }

  emailSignUp = () => {
    const email = this.state.email;
    const pass = this.state.pass
    firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName, user.email);
      this.props.history.push('')
      // ...
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  emailSignIn = () => {
    const email = this.state.email;
    const pass = this.state.pass
    firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName, user.email);
      this.props.history.push('/home')
      // ...
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // ...
      });
  }

  addProductToCart(item) {
    console.log(item);
axios.post("/cart",item).then((res)=>{
  console.log(res.data);
  item.quantity = 1;
    
  let db = this.state.db;
  
  db.cart.push(item);
  this.setState({db});
})
    // axios.get("http://localhost:8080/cart?id="+this.state.db.cart).then((res)=>{
     
    //   this.setState(
    //     { db: db }
    //   )
    
   
  }

  pageChanged(page) {
    let db = this.state.db;
    db.page = page;
    this.setState(
      { db: db }
    )
  }
  changeQuantity(item, e) {
     
    let db = this.state.db;
    let i = db.cart.indexOf(item)
    db.cart[i].quantity = parseInt(e.target.value);
    this.setState(
      { db: db }
    )
    console.log(db);
  }
  addToOrders(item) {
    let db = this.state.db;
    db.order.push(item);
    this.setState(
      { db: db }
    )
    console.log(db);
  }
  addProductToWishlist(item) {
    let db = this.state.db;
    item.quantity = 1;
    db.wishlist.push(item);
    this.setState(
      { db: db }
    )
    console.log(db);
  }
  changeQuantityWishlist(item, e) {

    let db = this.state.db;
    let i = db.wishlist.indexOf(item)
    db.wishlist[i].quantity = parseInt(e.target.value);
    this.setState(
      { db: db }
    )
    console.log(db);
  }
  deleteProduct(item, e) {
    let db = this.state.db;
    
    let i = db.cart.indexOf(item);
    /*axios.delete("https://localhost:8080/cart/"+cart.id)
    .then((res)=>{
      console.log(res);
    })*/
    db.cart.splice(i, 1);
    this.setState(

      {
        db: db
      }
    )
  }
  deleteProductWishlist(item, e) {
    let db = this.state.db;
    let i = db.wishlist.indexOf(item);
    db.wishlist.splice(i, 1);
    this.setState(

      {
        db: db
      }
    )

  }

  render() {
    return (<div>

      <Route path="/" exact render={(props) => <Login {...props} getEmail={this.getEmail} emailSignIn={this.emailSignIn} getPass={this.getPass} googleLogin={this.googleLogin} facebookLogin={this.facebookLogin} />} />
      <Route path="/home" render={(props) => <Products {...props} db={this.state.db} addProduct={this.addProductToCart.bind(this)} pageChanged={this.pageChanged.bind(this)} wishlistProduct={this.addProductToWishlist.bind(this)} changeQuantityWishlist={this.changeQuantityWishlist.bind(this)} />} />
      <Route path="/wishlist" render={(props) => <Wishlist {...props} addToOrders={this.addToOrders.bind(this)} db={this.state.db} deleteProductWishlist={this.deleteProductWishlist.bind(this)} changeQuantityWishlist={this.changeQuantityWishlist.bind(this)} />} />
      <Route path="/cart" render={props => <Cart {...props} addToOrders={this.addToOrders.bind(this)} db={this.state.db} deleteProduct={this.deleteProduct.bind(this)} changeQuantity={this.changeQuantity.bind(this)}> changeQuantityWishlist={this.changeQuantityWishlist.bind(this)}</Cart>} />
      {/* <Route path="/signup" component={signup} /> */}
      <Route path="/signup" render={props => <Signup {...props} googleLogin={this.googleLogin} emailSignUp={this.emailSignUp} getEmail={this.getEmail} getPass={this.getPass}></Signup>} />
      <Route path="/buy" component={Buy} />
      <Route path="/payment" component={payment} />
      <Route path="/orders" render={(props) => <Orders {...props} db={this.state.db} deleteProduct={this.deleteProduct.bind(this)}></Orders>} />
      <Route path="/mensfashion" render={(props) => <Mensfashion {...props} db={this.state.db} addProduct={this.addProductToCart.bind(this)} pageChanged={this.pageChanged.bind(this)} wishlistProduct={this.addProductToWishlist.bind(this)} changeQuantityWishlist={this.changeQuantityWishlist.bind(this)} />} />
      <Route path="/womensfashion" render={(props) => <Womensfashion {...props} db={this.state.db} addProduct={this.addProductToCart.bind(this)} pageChanged={this.pageChanged.bind(this)} wishlistProduct={this.addProductToWishlist.bind(this)} changeQuantityWishlist={this.changeQuantityWishlist.bind(this)} />} />
     

    </div>
    )

  }
}
export default withRouter(App);