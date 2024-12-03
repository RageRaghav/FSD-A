import { useState } from 'react'
import ImageEditor from './components/ImageApp';
import CounterApp from './components/CounterApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainLayout from './components/MainLayout';
function App() {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
          <Route path='/counter' element={<CounterApp />}/>
          <Route path='/image' element={<ImageEditor />} />
      </Routes>
      </BrowserRouter>
        </div>
  );
};

export default App
