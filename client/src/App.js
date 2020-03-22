import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import Header from './components/Header';
import Home from './components/Home';
import Rank from './components/Rank';
import Boogle from './components/Boggle';
import Footer from './components/Footer';
import './main.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/game" component={Boogle} />
              <Route path="/rank" component={Rank} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
