import React from 'react'
export default function Ch19FuncProps(props)
{
    return(
        <>
         <button onClick = { props.name} > Pass</button>
        </>
    );
}