import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

import Select from './components/Select';
import GamePlay from './components/GamePlay';
import './App.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Select/>}/>
      <Route path='play/:userChoice' element={<GamePlay />}/>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
