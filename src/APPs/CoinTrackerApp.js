import { useState, useEffect } from "react";

// 페이지접속 -> 로딩화면 -> 코인나열 -> 로딩화면 종료
function App(){
    const[loading, setLoading] = useState(true);
    const[coins, setCoins] = useState([]);
    const[dollar, setDollar] = useState(0);
    const[coinPrice, setCoinPrice] = useState(0);
    // 지불할 달러 입력
    const setPay = (e) => {
        if(e.target.value !== "")
            setDollar(e.target.value);
    }
    // 선택값 넣기
    const onChange = (e) => setCoinPrice(e.target.value);
    // 코인 API 호출
    useEffect(() =>{
        // API Json 파일로 변경
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => setCoins(json)); 
        setLoading(false);
    }, []); // 한번만 렌더링
    return (
        <div>
            <h1>The Coin!!({coins.length})</h1>
            <span>구매할 달러를 입력하세요. </span>
            <input 
                value={dollar}
                onChange={setPay}
                type="number" 
            /> 
            <hr/>
            {loading ? <strong>Loading...</strong> : 
                <select onChange={onChange}>
                    {coins.map((coin) => (
                    <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol})</option>
                    ))}
                </select>
            }
            <h1>너가 살수있는 코인의 개수는 : {dollar > 0 ? <span>{Math.floor(dollar/coinPrice)}</span> : null}</h1>
        </div>
    )
}

export default App;