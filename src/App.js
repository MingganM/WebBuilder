// PACKAGES:
import './App.scss';
import { Switch, Route } from 'react-router-dom';
// PAGES:
import Home from './Pages/Home';
import Build from './Pages/Build';
import Docs from './Pages/Docs';
// COMPONENTS:
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/Docs" component={Docs}/>
        <Route path="/Build" component={Build}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
