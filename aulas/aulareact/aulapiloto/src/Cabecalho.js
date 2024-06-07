import React, {Component} from 'react';
import logo from './assets/allan2.jpg';

class Cabecalho extends Component{
    render(){
        return(
            <>
                <span><strong>Allan Ferreira</strong></span>
                <br/>
                <span>Idade:37</span>
                <br/>
                <img src={logo} />
            </>
        )


    }
}

export default Cabecalho;