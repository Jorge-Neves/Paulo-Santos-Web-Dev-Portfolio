import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHolder from './Components/CardHolder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {
  return (
    <div className="App">
           <Switch>
              <Route exact path="/" component={CardHolder} />
              <Route exact path="/contacts" component={CardHolder} />
              <Route exact path="/bot" component={CardHolder} />
        </Switch>
    </div>
  );
}

export default App;
