import Home from './Pages/Home/Home';
import FootballTips from './Pages/FootballTips/FootballTips';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Pages/components/Navbar/Nav';
import Footer from './Pages/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/football-tips">
            <FootballTips />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
