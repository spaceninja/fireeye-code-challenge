import React from "react";
import Header from "./Header";
import TweetList from "./TweetList";
import Profile from "./Profile";
import TrendList from "./TrendList";
import Footer from "./Footer";

class App extends React.Component {
  openTweetModal = () => {
    console.log("OPEN NEW TWEET MODAL");
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Header openTweetModal={this.openTweetModal} />
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
