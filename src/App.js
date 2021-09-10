import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import HamburgerMenu from './Pages/HamburgerMenu'

import PrimarySearchAppBar from './Components/AppBarSearch';
import LabelBottomNavigation from './Components/BottomNavigation';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/signup'}  > <SignUp/> </Route>
            <Route path={process.env.PUBLIC_URL + '/login'}  > <Login/> </Route>
            <Route path={process.env.PUBLIC_URL + '/menu'}  > <HamburgerMenu/> </Route>
          </Switch>

      <footer className="App-footer">
        <LabelBottomNavigation/>
       
       This is a footer
      </footer>
    </div>
  );
  }

export default App;
