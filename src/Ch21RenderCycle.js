import React from 'react'

export default class Ch21RenderCycle extends React.Component
{
    
    render()
    {
        console.log("Render Called");
        return(
            <>
                
                <h1>Render Cycle Method  </h1>
            </>
        );
    }
}