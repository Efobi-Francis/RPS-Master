import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { ScoreProvider } from './components/ScoreContext'; // Import ScoreProvider
import SelectProvider from './components/SelectContext';
import { ToggleProvider } from './components/ToggleContext';

import RootLayout from './layouts/RootLayout';

import SelectContentBasic from './components/basic/SelectContentBasic';
import GamePlayBasic from './components/basic/GamePlayBasic'
import SelectContentBonus from './components/bonus/SelectContentBonus'
import GamePlayBonus from './components/bonus/GamePlayBonus';
import NotFound from './components/NotFound';
import './App.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<SelectProvider><SelectContentBasic/></SelectProvider>}/>
      <Route path='play' element={<SelectProvider><GamePlayBasic/></SelectProvider>}/>
      <Route path=':mode' element={<SelectProvider><SelectContentBonus/></SelectProvider>}/>
      <Route path=':mode/play' element={<SelectProvider><GamePlayBonus/></SelectProvider>}/>

      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);


function App() {

  return (
    <ToggleProvider>
      <ScoreProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
      </ScoreProvider>
    </ToggleProvider>
  )
}

export default App
