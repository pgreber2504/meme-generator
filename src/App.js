import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Home from './components/routes/Home'
import About from './components/routes/About'
import Main from './components/routes/Main'
import Modal from './components/layout/Modal';
import Spinner from './components/layout/Spinner';

const USERNAME_AND_PASSWORD = 'memegenerator2212'

function App() {
  const [memes, setMemes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [clickSelectTemp, setClickSelectTemp] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [topBoxVal, setTopBoxVal] = useState('');
  const [bottomBoxVal, setBottomBoxVal] = useState('');
  const [memeData, setMemeData] = useState(null);
  const [activeClassesNav, setActiveClassesNav] = useState(false)

  const generateMeme = () => {
    setMemeData(null)
    setLoader(true);
    setSelected(null);
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => {
        setMemes(data.data.memes.filter(meme => meme.box_count === 2));
        setClickSelectTemp(true);
        setLoader(false);
      })
      .catch(err => {
        alert(err.message);
        setClickSelectTemp(false);
        setLoader(false);
      })
  }

  const selectTempl = (id) => {
    const index = memes.findIndex(meme => meme.id === id);
    setSelected(memes[index]);
    setClickSelectTemp(false)
  }

  const setActive = () => {
    setActiveClassesNav(!activeClassesNav)
  }

  const onTopChange = (e) => {
    setTopBoxVal(e.target.value)
  }

  const onBottonChange = (e) => {
    setBottomBoxVal(e.target.value)
  };

  const finishMeme = () => {
    setLoader(true)
    fetch(`https://api.imgflip.com/caption_image?template_id=${selected.id}&username=${USERNAME_AND_PASSWORD}&password=${USERNAME_AND_PASSWORD}&text0=${topBoxVal}&text1=${bottomBoxVal}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        setLoader(false)
        setMemeData(data.data);
        setTopBoxVal('');
        setBottomBoxVal('');
      })
      .catch(err => {
        setLoader(false);
        console.log(err.error_message);
      })
  }


  return (
    <BrowserRouter>
      <div className="App">
        <div class="background-image"></div>
        <Navbar classes={activeClassesNav} activeNav={setActive} />
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/main' render={() => (
            <Main finished={memeData} finishMeme={finishMeme} onTopChange={onTopChange} onBottonChange={onBottonChange} topText={topBoxVal} bottomText={bottomBoxVal} selected={selected} loader={loader} selectTempClick={clickSelectTemp} selectTemp={selectTempl} click={generateMeme} memes={memes} />
          )} />
          <Route exact path='/about' component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
