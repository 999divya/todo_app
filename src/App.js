import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  // we are going to add each and every todo in an array, an empty array is given as default
  //to store the listing todos
  const [toDos, setToDos] = useState([]);
  // to store the typing todos
  const [toDo, setToDo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      {/* input field of the todolist */}
      {/* whatever components we want to change, its better to create a state for it and then maintain the state */}
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      {/* we have just passed a string to an array, change it to object */}
      <div className="todos">
        {toDos.map((obj) => {

          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(obj);



                  setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj.status = e.target.checked
                    }
                    return obj2;
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>

              </div>
              <div className="right">
                <i onClick={()=>{
                  setToDos(
                    toDos.filter((obj3)=>{
                      return obj3.id!==obj.id;
                    })
                  )
                }} className="fas fa-times"></i>
              </div>
            </div>
          )

        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
            }
return null;
          })
        }


      </div>
    </div>
  );
}

export default App;
