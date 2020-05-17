import React, { Component } from 'react'
import Item from './item'

class Lista extends Component{
    newItem = "";
    state = {
        techs:[
        ]
    };

    //executado assim que o componente aparece em tela
    componentDidMount(){
        const techs = localStorage.getItem('techs')

        if (techs){
            this.setState({techs: JSON.parse(techs)})
        }
    }

    //executado sempre que houver alteraçõ nas props ou estado
    componentDidUpdate(_, prevStates){
        if (prevStates.techs != this.state.techs){
            localStorage.setItem('techs',
                                 JSON.stringify(this.state.techs))
        }        
    }

    //executado quando deixar de existir
    componentWillMount(){

    }


    handleChangeInput = (e) =>{
        this.setState({newItem:e.target.value});
    } 
    
    handleSubmit = e =>{
        e.preventDefault();

        this.setState({
            techs:[...this.state.techs, this.state.newItem],
            newItem: ''
        })

        localStorage
    }

    handleDelete = (item)=>{
        this.setState({techs:this.state.techs.filter(t=>t!=item)})
    }



    render(){
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newItem}</h1>
                <ul>
                    {
                        this.state.techs.map((item)=>
                                                <Item 
                                                    key={item} 
                                                    item={item} 
                                                    onDelete={()=>this.handleDelete(item)}
                                                />
                                            )                      
                    }
                </ul>   
                <input type="text" onChange={this.handleChangeInput}></input>
                <button type="submit">Enviar</button>
            </form>        
        );
    }
}

export default Lista;