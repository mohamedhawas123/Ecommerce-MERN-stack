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
import PaymentScrean from './screens/profilescreen'

function App() {
  return (
    <React.Fragment>
      <Router>
         <Header />
      <main className="py-3">
        <Container>
        <Route exact path="/shipping" component={ShippingAddres} />
        <Route exact path="/login" component={LoginScrean} />
        <Route exact path="/profile" component={ProfileScrean} />
        <Route exact path="/register" component={RegisterScrean} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart/:id?" component={CartScrean} />
      </Container>
      </main>
      
      
    
    <Footer />
      </Router>
     
    </React.Fragment>
    

    
  );
}

export default App;
