import React from 'react';
import './App.css';

import Lista from './components/Lista';
import Cabecalho from './components/Cabecalho';

function App(){
    return (
        <div>
            <Cabecalho/>
            <Lista/>
        </div>
    )
}

export default App;