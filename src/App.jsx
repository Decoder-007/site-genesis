// import React from 'react';
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Event from "./components/Event/Event";
import Nav from "./components/Nav/Nav";

function App() {
  console.log("App component rendered");

  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Event />
      <Blog />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
