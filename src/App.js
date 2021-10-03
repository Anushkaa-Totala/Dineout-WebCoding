import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import SignUp from './Pages/SignUp.js'
import Login from './Pages/Login.js'
import HamburgerMenu from './Pages/HamburgerMenu.js'

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      
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