import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Components/Home';
import LandingPage from './Components/LandingPage'
import CardDetails from './Components/CardDetails';
import CreateRecipe from './Components/CreateRecipe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route exact path='/recipe' component={CreateRecipe} />
          <Route path='/:id'>
            <CardDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
