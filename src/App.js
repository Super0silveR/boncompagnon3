import Headers from './Headers';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import Quest from './quests';
import Error from './Error';
import Checkout1 from './checkout1';



function App() {
  return (
    <Router>
      <div className="App">
        <Headers></Headers>
        <Navbar></Navbar>
        <div className='content'>
          <Switch>
            <Route exact path='/boncompagnon3'>
              <h3>Acceuil</h3>
              <Home></Home>
            </Route>
            <Route path='/boncompagnon3/store'>
              <h3>Boutique</h3>
              <Store></Store>
            </Route>
            <Route path='/boncompagnon3/quetes'>
              <h3>Quests</h3>
              <Quest></Quest>
            </Route>
            <Route path='/boncompagnon3/error'>
              <h3>Oh oh...</h3>
              <Error></Error>
            </Route>
            <Route path='/boncompagnon3/faq'>
              <h3>FAQ</h3>
            </Route>
            <Route path='/boncompagnon3/about'>
              <h3>About Us</h3>
            </Route>
            <Route path='/boncompagnon3/signin'>
              <h3>Enregistrement</h3>
            </Route>
            <Route path='/boncompagnon3/connect'>
              <h3>Connection</h3>
            </Route>
            <Route path='/boncompagnon3/checkout'>
              <h3>Checkout!</h3>
              <Checkout1></Checkout1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
