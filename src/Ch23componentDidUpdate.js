import React from 'react'

export default class Ch23componentDidUpdate extends React.Component
{
    
    render()
    {
        console.log("Render Called");
        return(
            <>
                
                <h1>Render Cycle Method (ComponenDidMount / shouldComponentMount) </h1>
            </>
        );
    }
}