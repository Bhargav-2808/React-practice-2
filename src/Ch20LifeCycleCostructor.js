import React from 'react'

export default class Ch20LifeCycleConstructor extends React.Component
{
    constructor()
    {
        super();
        console.log("Constructor Called");
    }
    render()
    {
        console.log("Render Called");
        return(
            <>
                
                <h1>Constructor Life Cycle Method </h1>
            </>
        );
    }
}