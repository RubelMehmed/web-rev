import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Service from './Service/Service';
import Navigation from './Navigation/Navigation';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';
import NotFound from './NotFound/NotFound';

import Training from './Training/Training'




function App() {
  return (
    <div className="App">

       <BrowserRouter>
<Navigation></Navigation>



  <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>

    <Route  path="/home">
      <Home></Home>
    </Route>

    <Route path="/service">
      <Service></Service>
    </Route>

    <Route path="/training">
      <Training></Training>
    </Route>

    <Route path="/about">
    <About></About>
      </Route>

    <Route path="*">
      <NotFound></NotFound>
    </Route>
  

  </Switch>

  
  
  </BrowserRouter>
    </div>
  );
}

export default App;
