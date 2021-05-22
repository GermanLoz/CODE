import React, { useEffect, useState } from 'react'
import './App.css';

const App = ()=>{
  const api = 'http://api.mediastack.com/v1/news?access_key=1cfaa435002c0254f72b0b654a3710e4&languages=es&limit=5'
  const [todos, setData] = useState([])

  const obtener = async () => {
    const respuesta = await fetch(api)
    const datosJSON = await respuesta.json()
    setData(datosJSON.data)
  }

useEffect( (e)=>{
    obtener()
}, [])

  return (
   <div className="cont-table">
      <table id="table">
          <tr>
            <td className="title" >Categoria</td>
               {
                  !todos ? " "
                    : todos.map((todos,index)=>{
                    return <td key={todos.url} className="table-color">{todos.category}</td>;
                  })
               }
           </tr>
      <tr>
            <td className="title" >Autor</td>
               {
                !todos ? ' '
                    : todos.map((todos,index)=>{
                    return <td key={todos.url}  >{todos.author}</td>;
                 })
               }
            </tr>
      <tr>
            <td className="title" >Recurso</td>
               {
                !todos ? ' '
                    : todos.map((todos,index)=>{
                    return <td key={todos.url}  className="table-color">{todos.source}</td>;
                })
              }
            </tr>
      <tr>
             <td className="title">Idioma</td>
                {
                !todos ? ' '
                : todos.map((todos,index)=>{
                    return <td key={todos.url} >{todos.language}</td>;
                 })
              }
            </tr>
     <tr>
            <td className="title" >Pais</td>
                {
                  !todos ? ' '
                  : todos.map((todos,index)=>{
                    return <td key={todos.url}  className="table-color">{todos.country}</td>;
                 })
              }
          </tr>
     </table>
  </div>
);
}

export default App;
