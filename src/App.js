// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Error from './component/Error/Error';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/services'>
            <Services></Services>
          </Route>
          
          <Route path='/Contact'>
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
