import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Provider store={}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
