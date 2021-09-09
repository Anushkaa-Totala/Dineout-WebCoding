import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import Hotels from './Pages/Hotels.js'
import Offers from './Pages/Offers.js'
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
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/hotels'}  > <Hotels/> </Route>
            <Route path={process.env.PUBLIC_URL + '/offers'}  > <Offers/> </Route>
          </Switch>

      <footer className="App-footer">
        <LabelBottomNavigation/>
       
       This is a footer
      </footer>
    </div>
  );
  }

export default App;
