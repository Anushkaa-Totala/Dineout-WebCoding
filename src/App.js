import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import SignUp from './Pages/SignUp.js'
import Login from './Pages/Login.js'
import Location from './Pages/Location.js'
import HamburgerMenu from './Pages/HamburgerMenu.js'
import DineoutPassport from './Pages/DineoutPassport'
import { Hidden } from '@material-ui/core';
import DesktopSearch from './Components/DesktopHome/DesktopSearch';
import SimpleTabs from './Components/DesktopHome/tabs';
import Footer from './Components/DesktopHome/footer';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">

        <Hidden mdDown> <DesktopSearch /> </Hidden>
        <Hidden mdDown>  <SimpleTabs /> </Hidden>
      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/signup'}  > <SignUp /> </Route>
        <Route path={process.env.PUBLIC_URL + '/login'}  > <Login /> </Route>
        <Route path={process.env.PUBLIC_URL + '/location'}  > <Location /> </Route>
        <Route path={process.env.PUBLIC_URL + '/menu'}  > <HamburgerMenu /> </Route>
        <Route path={process.env.PUBLIC_URL + '/dineoutpassport'}  > <DineoutPassport /> </Route>

      </Switch>

      <footer className="App-footer">
        <Hidden mdDown><Footer /></Hidden>
      </footer>
    </div>
  );
}

export default App;