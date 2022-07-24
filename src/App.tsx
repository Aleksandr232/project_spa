import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Auth } from './pages/auth';
import { Airoport } from './pages/airport';
import { Navigation } from './components/Navigation';


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/airport:/id' element={<Airoport/>}/>
      </Routes>
    </div>
  );
}

export default App;
