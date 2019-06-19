import React, { Component } from "react";
import Grid from "react-css-grid";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";
import albums from "./albumsSantana.json";

class App extends Component {
  state = {
    albums,
    clickedAlbums: [],
    highScore: 0,
    currScore: 0
  };

  handleClick = e => {
    console.log("Albums", e.target.id);
    const id = e.target.id;
    this.evaluateClick(id);
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

  evaluateClick = id => {
    const currentArr = this.state.clickedAlbums;
    console.log("evaluateClick", currentArr);
    if (currentArr.includes(id)) {
      console.log("duplicate id in array");
      this.getGameResults(this.state.currScore, this.state.highScore);
    } else {
      currentArr.push(id);
      this.setState({
        clickedAlbums: currentArr,
        currScore: currentArr.length
      });
      console.log("clickedAlbums", this.state.clickedAlbums.length);
    }
  };

  getGameResults = (score, topScore) => {
    if (score > topScore) {
      this.setState({
        highScore: score
      });
      console.log(this.state.clickedAlbums);
    }
    this.setState({ clickedAlbums: [], currScore: 0 });
  };

  render() {
    return (
      <div className='App'>
        <Header
          currScore={this.state.currScore}
          highScore={this.state.highScore}
        />
        <Wrapper>
          <Grid width={320} gap={24}>
            {this.state.albums.map(album => (
              <GameCard
                name={album.name}
                src={album.image}
                key={album.id}
                id={album.id}
                handleClick={this.handleClick}
                evaluateClick={() => {
                  this.evaluateClick(album.id);
                }}
              />
            ))}
          </Grid>
        </Wrapper>
      </div>
    );
  }
}

export default App;
