import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import { BrowserRouter as Router } from 'react-router-dom';



const slides = [
  {
  img:"https://source.unsplash.com/tXGOhiGBu5I",
  textBoxContent:"text for slide 1"
  },
  {
  img:"https://source.unsplash.com/T0inbt7nRME",
  textBoxContent:"text for slide 2"
  },
  {
  img:"https://source.unsplash.com/fbAnIjhrOL4",
  textBoxContent:"text for slide 3"
  },
  {
  img:"https://source.unsplash.com/miziNqvJx5M",
  textBoxContent:"text for slide 4"
  },
  {
  img:"https://source.unsplash.com/olvdBsHT1bA",
  textBoxContent:"text for slide 5"
  },
  {
    img:"https://source.unsplash.com/4PMVNJeI3XU",
    textBoxContent:"text for slide 6"
  },
  {
    img:"https://source.unsplash.com/JruJFy08KB8",
    textBoxContent:"text for slide 7"
  }
]

const menuItems = [
  { id: 1,label: 'HOME' },
  { id: 2,label: 'ELECTRONICS' },
  { id: 3,label: 'BOOKS' },
  { id: 4,label: 'MUSIC' },
  { id: 5,label: 'MOVIES' },
  { id: 6,label: 'CLOTHING' },
  { id: 7,label: 'GAMES' },
  { id: 8,label: 'FURNITURE' },
  { id: 9,label: 'TRAVEL' },
  { id: 10,label: 'BOTANICAL' },
  { id: 11,label: 'CATEGORY NAME' },
]

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar items={menuItems} />
    </Router>


    <div className="container">
      <div className="header">
        <h1 className="title">Featured Products</h1>
        <h2 className="subtitle">Explore and discover a variety of products</h2>
      </div>
    </div>


    
      <Slider slides={slides} />
      </div>
  );
}

export default App;
