import React from "react";
import Header from "./Header";
import TweetList from "./TweetList";
import Profile from "./Profile";
import TrendList from "./TrendList";
import Footer from "./Footer";
// import logo from "../assets/logo.svg";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <aside className="app__sidebar">
          <Profile />
          <TrendList />
          <Footer />
        </aside>
        <main className="app__main">
          <TweetList />
        </main>
      </div>
    );
  }
}

export default App;
