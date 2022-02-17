import React, { useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import "./app.css";

import Header from "./components/Header";
import Button from "./components/Button";

import StronaA from "./Pages/StronaA";
import StronaB from "./Pages/StronaB";
import StronaC from "./Pages/StronaC";

function App() {
  const [animeA, setAnimeA] = useState(false);
  const [animeB, setAnimeB] = useState(false);
  const [animeC, setAnimeC] = useState(false);
  // const [anime, setAnime] = useState(false);

  const classesAnime = ["rectangle", animeB ? "animeB" : null, animeA ? "animeA" : null, animeC ? "animeC" : null];

  const doSomethingA = () => {
    // if (anime) {
    //   setAnime(false);
    // }
    setAnimeB(false);
    setAnimeC(false);
    setAnimeA(true);
    // setAnime(true);
  };

  const doSomethingB = () => {
    setAnimeA(false);
    setAnimeC(false);
    setAnimeB(true);
  };

  const doSomethingC = () => {
    setAnimeB(false);
    setAnimeA(false);
    setAnimeC(true);
  };

  return (
    <div className="App">
      <Header>
        <div className="wrapper">
          <Link to="/StronaA">
            <Button onClick={doSomethingA}>strona A</Button>
          </Link>

          <Link to="/StronaB">
            <Button onClick={doSomethingB}>strona B</Button>
          </Link>

          <Link to="/StronaC">
            <Button onClick={doSomethingC}>strona C</Button>
          </Link>
          <div className={classesAnime.join(" ")}>
            <div className="rectangleBack"></div>
          </div>
        </div>
      </Header>

      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/StronaA" />
          </Route>
          <Route path="/StronaA" exact>
            <StronaA>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam, nesciunt vel fuga quis perferendis
              illum recusandae earum nostrum placeat porro obcaecati sunt dolor perspiciatis voluptatum totam excepturi
              quo eveniet. Consectetur, optio nemo ducimus veritatis
              <br /> <br />
              rem tenetur nisi molestiae illo, repudiandae repellendus voluptatum quas perferendis necessitatibus nobis
              reiciendis. Dolor, debitis quis! Reiciendis dignissimos commodi officia illo? Nisi nam earum beatae!
            </StronaA>
          </Route>
          <Route path="/StronaB">
            <StronaB>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quasi itaque voluptatibus laborum ea
              voluptate nesciunt dolorem soluta veritatis corporis fugit vero nisi, nobis beatae corrupti, error, ipsa
              obcaecati natus!
            </StronaB>
          </Route>
          <Route path="/StronaC">
            <StronaC>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quasi itaque voluptatibus laborum ea <br />
              voluptate nesciunt dolorem soluta veritatis corporis fugit vero nisi, nobis beatae corrupti, error, ipsa
              <br />
              obcaecati natus!
            </StronaC>
          </Route>
          <Route path="/*">
            <h1 style={{ paddingTop: "120px", textAlign: "center" }}>cos nie pyklo ...</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
