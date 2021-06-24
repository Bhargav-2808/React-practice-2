import React, { useState } from 'react';

export default function Ch16_forms() {

    const [name, setName] = useState("")
    const [choise, setChoise] = useState("")
    const [Check, setCheck] = useState(false)
    
    const NoChange = (event) => {

        event.preventDefault();
       
        
            // <div>
            //     <h1>{name}</h1>
            //     <h1>{choise}</h1>
            //     <h1>{Check}</h1>
            // </div>
        console.log(name,choise,Check);
        
       
    }
    
    return (
        <>
            <form onSubmit={NoChange}>
                <input type="text" 
                placeholder="Eneter your Name" 
                onChange={(event) => setName(event.target.value) } />
                
                <br />
                <br />
                
                <select onChange={(event) => setChoise(event.target.value) }>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Orange</option>
                </select>
                <br />
                <br />
                
                <input type="checkbox" onChange={(event) => setCheck(event.target.checked) }/>
                <span> Make your choise</span>

                <button type="submit"> Update</button>
            </form>
        </>
    );
}