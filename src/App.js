import logo from './logo.svg';
import Header from './components/header'
import React from 'react';
import Footer from './components/footer';
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/homeScreen'

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
       
        <HomeScreen />
      </Container>
      </main>
      
      
    
    <Footer />
    </React.Fragment>
    

    
  );
}

export default App;
