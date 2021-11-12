import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Components/Home';
import LandingPage from './Components/LandingPage'
import CardDetails from './Components/CardDetails';
import { RecipeCreate } from './Components/Create';
import { useDispatch } from 'react-redux';
import { getDiets, getRecipes } from './Actions/actions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
    dispatch(getDiets())
  }, [dispatch])
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route exact path='/recipe' component={RecipeCreate} />
          <Route path='/:id'>
            <CardDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
