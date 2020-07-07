import React, { Fragment } from 'react';
import './App.scss';

import Header from './sections/Header/Header';
import About from './sections/About/About';
import Articles from './sections/Articles/Articles';

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Articles />
    </Fragment>
  );
}

export default App;
