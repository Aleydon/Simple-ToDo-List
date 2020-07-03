import React, { useEffect, useState } from 'react';




function TodoList() {
    const [ todo, setTodo ] = useState([]);
    const [ valueInput, setValueInput ] =  useState('');


  
    // When component is Mounted, get Values in Local Storage
    useEffect(() => {
        const todoStorage = localStorage.getItem('todo');
        if(todoStorage){
            setTodo(JSON.parse(todoStorage));
        }
    }, []);



      // Set values in Local Storage
      useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);




    {/*Get todo data and set values in todo
    and finally clear input
    */}
    function handleAddButton(){
        const data = [...todo, valueInput];
        setTodo(data);
        setValueInput('');
    }



  return(
      <div>
          <div>
              <header>
                  <h2>To-Do List</h2>
              </header>
          </div>

           <div>
                <input type="text" value={valueInput} onChange={(event) => {setValueInput(event.target.value)}} />
                <button onClick={handleAddButton}>Add Todo List</button>
            </div>
          <ul>
              {todo.map((item) => {
                  return(
                    <div>
                        <li key={item}>{item}</li>
                        {/* <button>X</button> */}
                    </div>
                  );
              })}
          </ul>
      </div>
  )
}

export default TodoList;