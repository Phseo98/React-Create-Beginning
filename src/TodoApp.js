import { useState, useEffect } from "react";

function App(){
    const[toDo, setToDo] = useState("");
    const[toDos, setToDos] = useState([]);
    const onChange = (event) => {setToDo(event.target.value)};
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        // 전개연산자
        // 새로운 배열을 만들고 배열의 첫번쨰 요소로 toDo 추가됨
        setToDos((currentArray) => [toDo, ...currentArray]); //전개연산자
        setToDo("");  
    };
    console.log(toDos);
    return(
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                value={toDo}   
                onChange={onChange}
                type="text" 
                placeholder="Write your to do..." 
            /> 
            <button >Add To Do</button>
            </form>
        </div>
    )

}

export default App;