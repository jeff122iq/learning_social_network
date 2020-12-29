import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./style.css";
import NavBar from "../../components/NavBar/NavBar";
import Messages from "../Messages/Messages";
import Friends from "../Friends/Friends";
import Posts from "../Posts/Posts";
import MyPage from "../MyPage/MyPage";

const HomePage = () => {
  return (
    <Router>
      <div className="homePage">
        <div className="mainPart">
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/home/messages" component={Messages} />
              <Route path="/home/friends" component={Friends} />
              <Route path="/home/posts" component={Posts} />
              <Route path="/home/my_page" component={MyPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
