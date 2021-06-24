import React from 'react'

export default class Ch13ClassProps extends React.Component
{
    render()
    {
        return(
            <>
                <h1>{this.props.name}</h1>
            </>
        );
    }
}