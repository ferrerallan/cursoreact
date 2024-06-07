import React,{Component} from 'react';
import Cabecalho from './Cabecalho';
import MedicoList from './components/MedicoList';
import './Estilos.css';

class App extends Component{
    render(){
        return(
            <>
                <Cabecalho/>
                <h2>Aobba </h2>
                <h3>Aobba 2</h3>
                <MedicoList especialidade='Cirurgia Cardiaca' cc='1.10.10'/>
            </>
        )
    }
}

export default App;