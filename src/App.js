import './App.css';
import Header from './component/Header';
import {Sidebar,SSSidebar } from './component/Sidebar';
import RecommendedVideo from "./component/RecommendedVideo";
import {BrowserRouter as Router,Switch, Route, Link, Redirect,} from "react-router-dom";
import SearchVideo from "./component/SearchVideo";
import WatchPage from './component/WatchPage';
import Tags from "./component/Tags";
import react, { useState } from "react";
import {Login} from "./component/Login";
import {Registration} from "./component/Registration";



function App() {
  const [searchItem,setSearchItem]=useState("");
  const [currentUser,setCurrentUser]=useState("vinu@gmail.com");
  return (
    <div className="App">

    <Router>
    
    <Switch>
      <Route  exact path="/signin">
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>
      <Route  exact path="/register">
        <Registration currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>
      <Route  exact path="/">
        <Header searchItem={searchItem} setSearchItem={setSearchItem} 
        currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <div className="App__page">
        <Sidebar/>
        <SSSidebar/>
        <RecommendedVideo searchItem={searchItem} setSearchItem={setSearchItem}/>
        </div>
      </Route>
      <Route  exact path="/search/:searchitem">
        <Header searchItem={searchItem} setSearchItem={setSearchItem} 
        currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <div className="App__page">
          <Sidebar/>
          <SSSidebar/>
          <SearchVideo searchItem={searchItem} setSearchItem={setSearchItem}/>
        </div>
      </Route>
      <Route  exact path="/watch/:watchitem">
      <div className="video_watch">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} 
      currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <WatchPage searchItem={searchItem} setSearchItem={setSearchItem} 
      currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </div>
    </Route>

      <Route exact path="/:feed/home">
      <div className="App__page">
      <Sidebar/>
      <SSSidebar/>
      <RecommendedVideo searchItem={searchItem} setSearchItem={setSearchItem}/>
      </div>
      </Route>
      <Route exact path="/:feed/explore">
        
      <div className="App__page">
      <Sidebar/>
      <SSSidebar/>
      
      </div>
      </Route>
    <Route exact path="/:feed/subscribe">
    <Header searchItem={searchItem} setSearchItem={setSearchItem} 
    currentUser={currentUser} setCurrentUser={setCurrentUser}
    />  
    <div className="App__page">
    <SSSidebar/>
    <RecommendedVideo searchItem={searchItem} setSearchItem={setSearchItem}/>
    </div>
  </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
