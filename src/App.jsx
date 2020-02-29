import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import CustomNavbar from './Components/CustomNavbar';

function App() {
  return (
    <div>
      <Router>
        <div>
          <CustomNavbar />
          
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/> 
          <Route  path="/news" component={News}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
