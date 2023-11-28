import { useState, useEffect } from "react";

function Hello() {
    // cleanup function?
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