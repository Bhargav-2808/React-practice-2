import React , {useState} from 'react';

export default class Ch11FuncCompState extends React.Component
{
    constructor()
    {
        super();
        this.state={
            Data:0
        };
    }

    counter() {

        this.setState({Data: this.state.Data+1})
        
    }
    
    render()
    {
        return(
            <>
                <h1>{this.state.Data}</h1>
                <button onClick= {() => this.counter()}>Click Here</button>        
            
            </>
        );
    }
}