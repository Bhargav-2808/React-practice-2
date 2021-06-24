import React ,{useEffect,useState} from 'react'
export default function API_()
{
    const [data,setData] = useState([]);
   useEffect(()=>{
       fetch("https://api.publicapis.org/entries").then( (result)=>{
            result.json().then( (resp)=>{
                console.log(resp)
                setData(resp.entries);
            })
          
       })
   },[])
   //console.log(data)
    return(
       
        <>
            <h2>Get API method</h2>
            <table border="1">
                <tbody>
                <tr>
                    <th>API</th>
                    <th>Category</th>
                  
                </tr>
                </tbody>
                {
                    data?.map( (item , index)=>
                    {
                    return <tbody>
                    <tr key={index}>
                        <td>{item.API}</td>
                        <td>{item.Category}</td>
                        
                    </tr>
                    </tbody>
                    })
                }
            </table>
        </>
    );
}