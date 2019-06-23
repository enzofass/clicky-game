import React, { Component } from "react";
import Grid from "react-css-grid";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import albums from "./albumsSantana.json";

class App extends Component {
  state = {
    albums,
    clickedAlbums: [],
    highScore: localStorage.getItem("highScore") || 0,
    currScore: 0,
    guessedRight: false,
    guessedWrong: false
  };

  handleClick = e => {
    const id = e.target.id;
    this.evaluateClick(id);
  };

  shuffleFunc = () => {
    let i = 0,
      j = 0,
      temp = null;

    for (i = albums.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = albums[i];
      albums[i] = albums[j];
      albums[j] = temp;
    }
    return this.setState({ albums, guessedWrong: false });
  };

  evaluateClick = id => {
    const { clickedAlbums } = this.state;
    const currentArr = clickedAlbums;
    console.log("evaluateClick", currentArr);
    if (currentArr.includes(id)) {
      console.log("duplicate id in array");
      this.setState({ guessedWrong: true, clickedAlbums: [], currScore: 0 });
    } else {
      currentArr.push(id);
      this.setState(
        {
          guessedRight: true,
          clickedAlbums: currentArr,
          currScore: currentArr.length
        },
        this.getGameResults
      );
      setTimeout(() => {
        this.setState({ guessedRight: false });
      }, 1500);
      this.shuffleFunc();
      console.log("clickedAlbums", clickedAlbums.length);
    }
  };

  getGameResults = () => {
    const { highScore, currScore } = this.state;
    if (currScore > highScore) {
      this.setState({
        highScore: currScore
      });
      localStorage.setItem("highScore", currScore);
    }
  };

  render() {
    return (
      <div className='App'>
        <Header
          currScore={this.state.currScore}
          highScore={this.state.highScore}
          guessedRight={this.state.guessedRight}
          guessedWrong={this.state.guessedWrong}
        />
        <Wrapper>
          <Grid width={280} gap={10}>
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
        <Footer />
      </div>
    );
  }
}

export default App;
