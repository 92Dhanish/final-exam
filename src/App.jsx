// import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import View from './components/View/View'
// import Add from './components/Add Product/Add'
import Editproduct from './components/Edit/Edit'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/view' element={<View />}></Route>
        <Route path='/Edit/:id' element={<Editproduct/>}></Route>

      </Routes>
    </>
  )
}

export default App
