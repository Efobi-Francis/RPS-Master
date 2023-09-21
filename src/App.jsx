import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { ScoreProvider } from './components/ScoreContext'; // Import ScoreProvider
import SelectProvider from './components/SelectContext';

import RootLayout from './layouts/RootLayout';

import SelectContent from './components/SelectContent'
import GamePlay from './components/GamePlay';
import NotFound from './components/NotFound';
import './App.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<SelectProvider><SelectContent/></SelectProvider>}/>
      <Route path='play' element={<SelectProvider><GamePlay/></SelectProvider>}/>

      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

function App() {
  return (
    <ScoreProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
    </ScoreProvider>
  )
}

export default App
