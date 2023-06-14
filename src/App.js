import { Fragment } from "react";
import NavbarTop from "./components/navbar";
import HeadingBar from "./components/heading";
import Album from "./components/albumTile";

const App = () => {
  const albumDetails=[
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ]

  return (
    <Fragment>
      <NavbarTop />
      <hr />
      <HeadingBar />
      <Album albumDetails1={albumDetails[0]} albumDetails2={albumDetails[1]}/>
      <Album albumDetails1={albumDetails[2]} albumDetails2={albumDetails[3]}/>
    </Fragment>
  );
};

export default App;
