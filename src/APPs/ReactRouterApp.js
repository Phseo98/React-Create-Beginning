import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../routes/Home";
import Movie from "../components/Movie";
import Detail from "../routes/Detail";

// Route는 URL을 의미함 
// 컴포넌트들의 모음집??
// 한번에 Route하나만 렌더링 되기를 원함 그래서 Swich컴포넌트 사용
// HTML에서 a태그를 이용하면 페이지 전체가 새로고침 됨
function App(){
    return (
        <Router>
            <Switch>
                <Route path="/hello">
                    <h1>Hello~!</h1>
                </Route>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="">
                     <Home />
                </Route>
            </Switch>
        </Router> 
    )
}

export default App;