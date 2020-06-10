import React, { Fragment } from 'react';
import './App.scss';

import Header from './sections/Header/Header';
import About from './sections/About/About';

function App() {
  return (
    <Fragment>
      <Header />
      <About />
    </Fragment>
  );
}

export default App;
