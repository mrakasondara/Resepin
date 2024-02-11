import  React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Content/Home'
import RecipeDetail from './Content/RecipeDetail'
import UserContextProvider from './UserContext'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/recipe/:idMeal" element={<RecipeDetail/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
