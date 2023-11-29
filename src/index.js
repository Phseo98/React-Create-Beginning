import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './APPs/useEffectApp';
import App2 from './APPs/CleanUpAPP';
import TodoApp from './APPs/TodoApp';
import CoinApp from './APPs/CoinTrackerApp';
import MovieApp from './APPs/MovieApp';
import ReactRouterApp from './APPs/ReactRouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <ReactRouterApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
