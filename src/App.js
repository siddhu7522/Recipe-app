import React, { useEffect,useState } from 'react'
import "./App.css"
import Recipe from "./Recipe"
function App() {
  const[recipes,setRecipes]=useState([])
  const[search,setSearch]=useState("")
  const[query,setQuery]=useState('chicken')
  const APP_ID="e456decd"
  const APP_KEY="26e24f5a58c28cce94e5c97a6036e0ea"
  
  useEffect(()=>{
      getRecipes()
  },[query]);
  const getRecipes=async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json() ; 
  
  setRecipes(data.hits) 
  console.log(data.hits)
  
  }
 const updateSearch=(e)=>{
   e.preventDefault()
   setSearch(e.target.value)
   console.log(search)
   
 }
 const getSearch=(e)=>{
   e.preventDefault()
   setQuery(search)
   setSearch('')
 }

  return (
    <div className="App">
      <form className="search__form"onSubmit={getSearch}>
        <input type="text"className="search__bar"value={search}onChange={updateSearch} placeholder="   Search Items">

        </input>
        <button type="submit"className="search__button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}image={recipe.recipe.image}/>
      ))}
      </div>
    
    </div>
 
 )
 
}

export default App
