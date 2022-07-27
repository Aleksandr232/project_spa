import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Auth } from './pages/auth';
import { Airoport } from './pages/airport';
import { Navigation } from './components/Navigation';
import { useAppDispatch } from './hook/redux';
import { fetchHandbooks } from './store/actions/handbooksAction';


function App() {
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchHandbooks())
  },[dispatch])

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
