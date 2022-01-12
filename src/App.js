import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import RecommendedVideo from "./component/RecommendedVideo";
import {BrowserRouter as Router,Switch, Route, Link,} from "react-router-dom";
import SearchVideo from "./component/SearchVideo";


function App() {
  return (
    <div className="App">

    <Router>
    <Header/>
    <Switch>
      <Route  exact path="/search/:searchitem">
        <div className="App__page">
        <Sidebar/>
        <SearchVideo/>
        </div>
      </Route>
      <Route exact path="/">
        <div className="App__page">
        <Sidebar/>
        <RecommendedVideo/>
        </div>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
