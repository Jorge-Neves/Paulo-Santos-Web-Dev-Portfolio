import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHolder from './Components/CardHolder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMe from './Components/AboutMe';




function App() {
  return (
    <div className="App">
           <Switch>
              <Route exact path="/" component={CardHolder} />
              <Route exact path="/projects" component={CardHolder} />
              <Route exact path="/about" component={AboutMe} />
        </Switch>
    </div>
  );
}

export default App;
