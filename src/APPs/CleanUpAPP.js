import { useState, useEffect } from "react";

function Hello() {
    // Clean Up function
    // Clean Up 함수는 컴포넌트가 unMount될때 실행됨
    // Mount란 컴포넌트가 Dom에 삽입되고나서 화면에 나타날때
    useEffect(() => {
        console.log("createded :)");
        return () => console.log("distoried :("); //컴포넌트가 종료될 때도 리턴하여 함수 실행이 가능
    }, []);
    return <h1>Hello</h1>;
}

function App(){
    const[showing, setShowing] = useState(true);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export default App;