import React, { useState } from 'react'
import axios from 'axios'
function App() {
  const [text,setText]=useState("search movie")

  const [movie,setMovie]=useState([])

  const changeText=(event)=>{
    setText(event.target.value)
  }

  const getMovie=(e)=>{
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=63965cdc`)
    .then((response)=>{
      console.log(response);
      setMovie(response.data.Search)
    })
  }
  return (
<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <h4 style={{color:"white"}}>Movie Search App</h4>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    <form className="form-inline my-2 my-lg-0" onSubmit={getMovie}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<div className="container my-3" >
    <div className="row">
         {
          movie.map((value,index)=>{
            return(
              <div className="col-3">
              <div className="card" style={{width:"18rem"}}>
                 <img src={value.Poster} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{value.Year}</h5>
                <h4 clasName="card-text">{value.Title}</h4>
                 
      </div>
    </div>
    </div>
            )
          }
          )
         }
    </div>
</div>
 </>

  )
}

export default App
