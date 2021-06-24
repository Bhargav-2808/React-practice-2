import React from 'react'

export default class Ch25componentwillunmount extends React.Component
{
    componentWillUnmount()
    {
      alert("called");
    }
    
    render()
    {
        console.log("Render Called");
        return(
           <><h1> Hide and seek</h1></>
        );
    }
}