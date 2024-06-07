import React, {Component} from 'react';

class MedicoList extends Component{
    state = {
        medicos:[
            'Medico 1',
            'Medico 2',
            'Medico 3',
        ],
        novoItem:null        
    }   

    handleChanged = (e) => {
        this.setState({
            novoItem:e.target.value
        })
    }

    handleSubmit = (e) =>{
        this.setState({
            medicos:[...this.state.medicos, this.state.novoItem]
        })
    }

    render(){
        console.log(this.state.medicos);
        return (
            <>         
                <span>Centro de custo<strong>{this.props.cc}</strong></span>
                <ul>
                    <li>{this.props.especialidade}</li>
                    {this.state.medicos.map(medico => <li key={medico}>{medico}</li> )}
                </ul>
                <input type="text" onChange={this.handleChanged}></input>
                <button type="submit" onClick={this.handleSubmit}>Gravar</button>
            </>
        )
    }
}

export default MedicoList;