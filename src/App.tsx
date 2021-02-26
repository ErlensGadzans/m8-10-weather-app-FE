import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Output from './components/Output';
import SearchBar from './components/SearchBar';
import LoginComponent from './components/Login';
import { Route, withRouter } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <header className="App-header">

       <Route path="/login" component={LoginComponent} />

       <Route exact path="/" component={SearchBar} />
      </header>
    </div>
  );
}

export default withRouter(App);;
