import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import SignUp from './Pages/SignUp.js'
import Login from './Pages/Login.js'
import HamburgerMenu from './Pages/HamburgerMenu.js'
import ButtonAppBar from './Components/AppBar';
import { Button } from '@material-ui/core';
import {Link, Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
       <ButtonAppBar/>
       <Link to={process.env.PUBLIC_URL + '/login'}>
                <Button>
                  Link trial3
                </Button>
            </Link>
      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/signup'}  > <SignUp /> </Route>
        <Route path={process.env.PUBLIC_URL + '/login'}  > <Login /> </Route>
        <Route path={process.env.PUBLIC_URL + '/menu'}  > <HamburgerMenu /> </Route>

      </Switch>

      <footer className="App-footer">
        
      </footer>
    </div>
  );
}

export default App;