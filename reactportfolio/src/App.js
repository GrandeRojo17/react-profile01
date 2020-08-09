
// React Helmet is a simple component that makes it easy to manage and dynamically set what’s in the document’s head section. This makes server-side rendering and React Helmet a dynamic duo for creating apps that are SEO and social media-friendly.
import React, { Component } from "react";
import NavBar from './components/NavBar';
import './index.css'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
class App extends Component {
  render() {

    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;