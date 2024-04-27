
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Home'
import { SinglePage } from './SinglePage'
import ContextProvider from './context/AppContext'
import { Movies } from './Movies'
import Spinner from './Spinner'

function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<SinglePage />}>
              <Route path='/movies/:id' element={<SinglePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>

      {/* <Spinner /> */}

    </>
  )
}

export default App
