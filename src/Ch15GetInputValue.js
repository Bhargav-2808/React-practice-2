import React , {useState} from 'react'
function Ch15GetInputValue()
{
    const [data,setData]  = useState(null)
    const [print ,setPrint] =useState(false)
    

    function getData(val)
    {

        setData(val.target.value);
        setPrint(false);
    }
    return(
        <>
            {
            print? 
            <h1>{data}</h1>
            :null
            }
            <input type ="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)}>Print</button>

        </>
    );
}

export default Ch15GetInputValue;