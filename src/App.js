import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import SearchBar from './features/searchBar/SearchBar';
import MainDataDisplay from './features/mainDataDisplay/MainDataDisplay';


function App() {
  return (
    <div className='container-fluid' id='root-container'>
      <div className="App">
        <div className='container' id="App-header">
          <div className='row'>
            <div className='col d-flex align-items-center'>
              <h1 className='mb-0'>Reddit Client</h1>
            </div>
          </div>
        </div>
        <main className='main-div'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <SearchBar />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <MainDataDisplay />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;
