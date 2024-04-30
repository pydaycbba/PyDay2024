import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';

import './styles/index.css';

function App(){
    return (<h1>hola mundo!!</h1>);
}
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>
)
export default App

