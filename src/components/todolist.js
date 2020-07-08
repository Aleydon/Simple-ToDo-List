import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './style.css';



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
        if(valueInput != ''){
            const data = [...todo, valueInput];
            setTodo(data);
            setValueInput('');
        }else{
            alert('Please, insert something');
        }
    }



  return(
      <div className="box">
          <div>
              <header>
                  <h2>To-Do List</h2>
              </header>
          </div>

            <div className="container-items">
                <div>
                    <input type="text"  placeholder="Type Here" value={valueInput} onChange={(event) => {setValueInput(event.target.value)}} />
                    <button onClick={handleAddButton} className="btnAdd">Add Item <FaPlus color="green" /></button>
                </div>

                <div className="list-items">  
                    {todo.map((item) => {
                                return(
                                    <div className="box2">
                                        <ul>
                                            <li key={item}> {item}</li>
                                            <button>Remove</button>
                                        </ul>
                                    </div>
                            );
                    })}          
                </div>
            </div>
      </div>    
  )
}

export default TodoList;