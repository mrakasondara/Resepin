import  React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Recipe from './Recipe'
import UserContextProvider from './UserContext'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/recipe/:idMeal" element={<Recipe/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
