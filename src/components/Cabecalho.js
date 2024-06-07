import React, { Component } from 'react';
import logo from '../assets/allan.jpg';

class Cabecalho extends Component{
    render(){
        return (
            <div>
                <span>teste imagem</span>
                <img src={logo} ></img>
            </div>
        )
    }
}

export default Cabecalho;