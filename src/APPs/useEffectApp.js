import { useState, useEffect  } from 'react';
import Button from './Button';

function App() {
  const[counter, setCounter] = useState(0);
  const[keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.")
  }, []); // [] 안에는 react가 변화하는걸감지, 빈배열이면 한번만 실행되는 이유
  useEffect(() => {
     console.log("I run when 'keyword' Changes");
  }, [keyword]); // keyword가 변화할때 코드실행  변수에의존 한다 (의존성)
  useEffect(() => {
    console.log("I run when 'counter' Changes");
 }, [counter]); // counter가 변화할때 코드실행 
 useEffect(() => {
  console.log("I run when 'counter' and 'keyword' Changes");
}, [counter, keyword]); // counter,keyword가 변화할때 코드실행 
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
     </div>
  );
}

export default App;