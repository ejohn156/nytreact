import React from 'react';
import './App.css';
import Header from "./components/Header"
import Search from "./components/Search"
import Saved from "./components/Saved"
import Wrapper from "./components/Wrapper"

const App = () =>  (
      <Wrapper>
        <Header />
        <Search />
        <Saved />
      </Wrapper>
)

export default App;
