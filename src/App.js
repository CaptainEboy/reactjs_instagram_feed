
import React from 'react'
import InstaFeeds from './Components/InstaFeeds'

import './App.css';

const App = () => {
  return (
    <>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Welcome To Coal Ibogun</h1>
      </header>

      <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={20}/>
    </>
  );
}

export default App;