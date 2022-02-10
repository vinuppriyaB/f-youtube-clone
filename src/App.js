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
import {ChannelPage} from "./component/ChannelPage";
import {YourChannel} from './component/YourChannel';
import {PostVideo} from './component/PostVideo';



function App() {
  

  const [searchItem,setSearchItem]=useState("");
  const [currentUser,setCurrentUser]=useState("vinu@gmail.com");
  const [userName,setUserName]=useState("");
  const [userEmail,setUserEmail]=useState("");
  const [profilePic,setProfilePic]=useState("");
  const [search,setSearch]=useState(false);
  return (
    <div className="App">

    <Router>
    
    <Switch>
      <Route  exact path="/signin">
        <Login userName={userName} 
              setUserName={setUserName} 
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              profilePic={profilePic}
              setProfilePic={setProfilePic}
              currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>

      <Route  exact path="/register">
        <Registration 
              userName={userName} 
              setUserName={setUserName} 
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              profilePic={profilePic}
              setProfilePic={setProfilePic}
        currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>

      <Route  exact path="/">
        <Header searchItem={searchItem} setSearchItem={setSearchItem} 
        setSearch={setSearch}
        search={search}
        currentUser={currentUser} setCurrentUser={setCurrentUser}
        userName={userName}  userEmail={userEmail} profilePic={profilePic}
        setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
        <div className="App__page">
        <Sidebar userEmail={userEmail} setUserName={setUserName}/>
        <SSSidebar/>
        <RecommendedVideo searchItem={searchItem} setSearchItem={setSearchItem}
        userName={userName} userEmail={userEmail} profilePic={profilePic}/>
        </div>
      </Route>

      <Route  exact path="/yourchannel/:email">
        <Header searchItem={searchItem} setSearchItem={setSearchItem} 
        currentUser={currentUser} setCurrentUser={setCurrentUser}
        setSearch={setSearch}
        search={search}
        userName={userName}  userEmail={userEmail} profilePic={profilePic}
        setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
        <div className="App__page">
        <Sidebar userEmail={userEmail} setUserName={setUserName}/>
        <SSSidebar/>
        <YourChannel searchItem={searchItem} setSearchItem={setSearchItem}
        userName={userName} userEmail={userEmail} profilePic={profilePic}/>
        </div>
      </Route>

      <Route  exact path="/postvideo">
        <Header searchItem={searchItem} setSearchItem={setSearchItem} 
        currentUser={currentUser} setCurrentUser={setCurrentUser}
        userName={userName}  userEmail={userEmail} profilePic={profilePic}
        setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
        <div className="App__page">
        <Sidebar userEmail={userEmail} setUserName={setUserName}/>
        <SSSidebar/>
        <PostVideo searchItem={searchItem} setSearchItem={setSearchItem}
        userName={userName} userEmail={userEmail} profilePic={profilePic}/>
        </div>
      </Route>

      <Route  exact path="/search/:searchitem">
        <Header searchItem={searchItem} setSearchItem={setSearchItem} 
        currentUser={currentUser} setCurrentUser={setCurrentUser}
        userName={userName} userEmail={userEmail} profilePic={profilePic}
        setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
        <div className="App__page">
          <Sidebar userEmail={userEmail} setUserName={setUserName}/>
          <SSSidebar/>
          <SearchVideo searchItem={searchItem} setSearchItem={setSearchItem}
          userName={userName} userEmail={userEmail} profilePic={profilePic}/>
        </div>
      </Route>

      <Route  exact path="/watch/:watchitem">
      <div className="video_watch">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} 
      currentUser={currentUser} setCurrentUser={setCurrentUser}
      userName={userName} userEmail={userEmail} profilePic={profilePic}
      setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
      <WatchPage searchItem={searchItem} setSearchItem={setSearchItem} 
      currentUser={currentUser} setCurrentUser={setCurrentUser}
      userName={userName} userEmail={userEmail} profilePic={profilePic}/>
      </div>
    </Route>

    <Route  exact path="/channelpage/:channelname">
    <Header searchItem={searchItem} setSearchItem={setSearchItem} 
    currentUser={currentUser} setCurrentUser={setCurrentUser}
    userName={userName} userEmail={userEmail} profilePic={profilePic}
    setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
    <div className="App__page">
      <Sidebar userEmail={userEmail} setUserName={setUserName}/>
      <SSSidebar/>
      <ChannelPage searchItem={searchItem} setSearchItem={setSearchItem}
      userName={userName} userEmail={userEmail} profilePic={profilePic}/>
    </div>
  </Route>
      
      <Route exact path="/:feed/home">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} 
      currentUser={currentUser} setCurrentUser={setCurrentUser}
      setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
      <div className="App__page">
      <Sidebar userEmail={userEmail} setUserName={setUserName}/>
      <SSSidebar/>
      <RecommendedVideo searchItem={searchItem} setSearchItem={setSearchItem}
      userName={userName} userEmail={userEmail} profilePic={profilePic}/>
      </div>
      </Route>

      <Route exact path="/:feed/explore">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} 
      currentUser={currentUser} setCurrentUser={setCurrentUser}
      setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>
      <div className="App__page">
      <Sidebar userEmail={userEmail} setUserName={setUserName}/>
      <SSSidebar/>
      <RecommendedVideo searchItem={searchItem} setSearchItem={setSearchItem}
      userName={userName} userEmail={userEmail} profilePic={profilePic}/>
      </div>
      </Route>

    <Route exact path="/:feed/subscribe">
    <Header searchItem={searchItem} setSearchItem={setSearchItem} 
    currentUser={currentUser} setCurrentUser={setCurrentUser}
    setUserName={setUserName} setUserEmail={setUserEmail} setProfilePic={setProfilePic}/>  
    <div className="App__page">
    <Sidebar userEmail={userEmail} setUserName={setUserName}/>
    <SSSidebar/>
    <RecommendedVideo searchItem={searchItem} setSearchItem={setSearchItem}
    userName={userName} userEmail={userEmail} profilePic={profilePic}/>
    </div>
  </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
