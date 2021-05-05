import logo from './logo.svg';
import Header from './components/header'
import React from 'react';
import Footer from './components/footer';
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/homeScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductScreen from './screens/productscreen'
import CartScrean from './screens/cartScrean'
import LoginScrean from './screens/loginScreen'
import RegisterScrean from './screens/registerScrean'
import ProfileScrean from './screens/profilescreen'
import ShippingAddres from './screens/shippingScrean'
import PaymentScrean from './screens/paymentScrean'
import PlaceOrderScrean from './screens/placeorderScrean'
import OrderScrean from './screens/orderScrean'
import UserListScrean from './screens/userListScreen'
import UserEditScreen from './screens/userEditScrean'
import ProductListScrean from './screens/productlistscreen'
import ProductEditScreen from './screens/productEditScreen'
import Orderlistadmin from './screens/listscreenorderadmin'
import OrderScreenAdmin from './screens/orderScrean'
import SearchBox from './components/searchbox'


function App() {
  return (
    <React.Fragment>
      <Router>
         <Header />
      <main className="py-3">
        <Container>
        <Route exact path="/order/:id" component={OrderScrean} />
        <Route exact path="/placeorder" component={PlaceOrderScrean} />
        <Route exact path="/payment" component={PaymentScrean} />
        <Route exact path="/shipping" component={ShippingAddres} />
        <Route exact path="/login" component={LoginScrean} />
        <Route exact path="/profile" component={ProfileScrean} />
        <Route exact path="/register" component={RegisterScrean} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/admin/userlist" component={UserListScrean} />
        <Route exact path="/admin/productlist" component={ProductListScrean} />
        <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route exact path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route exact path="/admin/orderlist" component={Orderlistadmin} />
        <Route exact path="/cart/:id?" component={CartScrean} />
      </Container>
      </main>
      
      
    
    <Footer />
      </Router>
     
    </React.Fragment>
    

    
  );
}

export default App;
