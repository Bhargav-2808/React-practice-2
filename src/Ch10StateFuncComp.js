import React, {useState} from 'react';
export default function Ch10StateFuncComp ()
{
    const [Data, setstate] = useState(0);

    return(
        <>
                <h1>{Data}</h1>
                <button onClick={ () => setstate(Data+1)}>Click Here</button>          
        </>
    );
}