import './App.css';
import Home from './components/home'
import Edit from './components/edit'
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/edit/:id" component={Edit}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
