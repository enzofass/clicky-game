import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";
import albums from "./albumsSantana.json";

class App extends Component {
  state = {
    albums,
    isClicked: false
  };

  handleClick = () => {
    console.log("Albums", albums);
    this.setState({ isClicked: true });
    let i = 0,
      j = 0,
      temp = null;

    for (i = albums.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = albums[i];
      albums[i] = albums[j];
      albums[j] = temp;
    }
    return this.setState({ albums });
  };

  render() {
    return (
      <div className='App'>
        <h1>Clicky Game</h1>
        <Wrapper>
          {this.state.albums.map(album => (
            <GameCard
              name={album.name}
              src={album.image}
              key={album.id}
              handleClick={this.handleClick}
              isClicked={this.state.isClicked}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
