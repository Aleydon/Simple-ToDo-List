import React, { useEffect, useState } from 'react';




function TodoList() {
    const [ todo, setTodo ] = useState([]);
    const [ valueInput, setValueInput ] =  useState('');


    useEffect(() => {
        const data = todo;
        return data;
    }, []);


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
        
        <div>
            <input type="text" value={valueInput} onChange={(event) => {setValueInput(event.target.value)}} />
            <button onClick={handleAddButton}>Add Todo List</button>
        </div>
      </div>
  )
}

export default TodoList;