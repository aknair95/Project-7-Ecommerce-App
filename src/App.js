import { Fragment } from "react";
import NavbarTop from "./components/navbar";

import HeadingBar from "./components/heading";


const App=() =>{
  return (
    <Fragment>
      <NavbarTop/>
      <hr/>
      <HeadingBar/>
    </Fragment>
  );
}

export default App;
