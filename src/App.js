import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
