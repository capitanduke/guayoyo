import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
//import Header from './components/Header';
//import Main from "./components/Main";
import Menu from "./components/Menu/Menu";
import DragImages from "./components/PicaPica/DragImages"

function App() {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      axios.get("https://esguayoyo.com/wp-json/wp/v2/posts/?_embed")
        .then(setLoading(true))
        .then(res => {
          setPosts(res.data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err)
        })

  }, [])

  
  


  return (
    <>
      <Menu />
      {/*<DragImages />*/}
    </>
  )
    

    
  ;
}

export default App;
