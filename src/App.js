import React, { useState, useEffect } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './App.css';
import Ch12PropsFunc from './Ch12PropsFunc';
import Ch13ClassProps from './Ch13ClassProps';
import Ch15GetInputValue from './Ch15GetInputValue';
import Ch16_forms from './Ch16_forms'
import Ch19FuncProps from './Ch19PassFuncProps'
import Ch20LifeCycleConstructor from './Ch20LifeCycleCostructor'
import Ch21RenderCycle from './Ch21RenderCycle';
import Ch22COmponentDidMount from './Ch22COmponentDidMount';
import Ch23componentDidUpdate from './Ch23componentDidUpdate';
import Ch25componentwillunmount from './Ch25componentwillunmount'
import Ch28UseEffect from './Ch28UseEffect'
import Ch35NestedListNestedArray from './Ch35NestedListNestedArray'
import Ch36ChildToParent from './Ch36SendChildToParent';
import Paths from './Routing/Paths'
import Links from './Routing/Links'
import User from './User';
import User1 from './User1'
import API_ from './API_';
 
// function App() {
//    const [name , setName] = useState("Bhargav")
//   return (
//     <div className="App">

//         <Ch12PropsFunc  name= {name}/>

//         {/* <h1>Email :{props.email} </h1> 
//         <h1>Add {props.other.add} </h1> 
//         <h1>age:{props.other.age} </h1>  */}
//        <button onClick={()=>{setName("arpit")}}>Update</button> 


//     </div>
//   );
// }

//ch13
// class App extends React.Component
// {
//   constructor()
//     {
//       super();
//       this.state= {
//         name : "Bhargav"
//       }
//     }
//   render()
//   {



//     return(
//       <>

//       <Ch13ClassProps name={this.state.name}/>
//       <button onClick = {() => this.setState({name : "Arpit"})}>Update</button>
//       </>
//     );
//   }
// }

//Ch14

// function App()
// {
//   return(
//     <>
//     <Ch15GetInputValue/>

//     </>
//   );
// }


// ch16
// function App() {
//   return (
//     <>
//       <Ch16_forms />

//     </>
//   );
// }


//ch18


// function App()
// {
//   const alert_ = ()=>alert("hello");
//   return(
//     <>
//       <Ch19FuncProps name={alert_}/>
//     </>
//   );
// }

//ch20 

// function App()
// {
//   return(
//     <>
//       <Ch20LifeCycleConstructor/>
//     </>
//   );
// }

//ch21
// function App()
// {

//   const [count, setName] = useState("Bharagv")
//   return(
//     <>
//       <Ch21RenderCycle name={count}/>
//       <button onClick={()=>setName({count:count+1})}>Update</button>
//     </>
//   );
// }


//ch22


// class App extends React.Component {

//   constructor()
//   {
//     super();
//     this.state ={
//       count:0
//     }
//   }

//   componentDidMount() {
//     console.log("CDM called");
//   }
//   render() {
//     return (
//       <>
//         <Ch22COmponentDidMount name={this.state.count} />
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
//       </>
//     );
//   }
// }

//ch23

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//     console.log("Constructor Called");
//   }

//   // componentDidUpdate(prevProps,prevState,snapshot) {
//   //   console.log("CDUcalled" , prevState,this.state.count);

//   //   {
//   //     prevState === this.state.count?console.warn("same"):console.log("Not Same");

//   //   }
//   // }

//   shouldComponentUpdate()
//   {
//     console.log("shouldcomponentUpdate called")
//     return true //  if we make it false(default it is false) then the count not increment but method is called
//   }



//   render() {
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <Ch23componentDidUpdate name={this.state.count} />
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
//       </>
//     );
//   }
// }


//ch25

// class App extends React.Component {
//   constructor()
//     {
//         super();
//         this.state= {
//             hide:true
//         }
//     }

//    render() {
//     return (
//       <>

//         {
//           this.state.hide ? <Ch25componentwillunmount/> : null
//         }
//         <button onClick={() => this.setState({ hide: !this.state.hide })} >Toggle</button>

//       </>
//     );
//   }
// }

//ch28


// function App()
// {
//   const [Data1 , setData1] = useState(10)
//   const [Data2 , setData2] = useState(100)

//   useEffect(() => {
//       console.log("Data1 Called");
//   },[Data1])

//   useEffect(() => {
//       console.log("Data2 Called");
//   },[Data2])
//   return(


//     <>
//       <Ch28UseEffect D1={Data1}  D2={Data2}/>

//       <Button onClick={ ()=> {setData1(Data1+1)}}>Update Data1</Button>
//       <Button onClick={ ()=> {setData2(Data2+1)}}>Update Data2</Button>
//     </>
//   );
// }

//ch33

// function App() {
//   return (
//     <>
//       <Ch35NestedListNestedArray />

//     </>
//   );
// }

//ch36 / Lifting State Up


// function App()
// {
//   function MakeChange(data)
//   {
//     alert(data);
//   }
//   return(
//     <>
//       <Ch36ChildToParent  name={MakeChange}>

//       </Ch36ChildToParent>
//     </>
//   );
// }

//ch44

// function App()
// {
//   return(
//     <>
//         <h1>HOC</h1>
//         <HOCred cmp={Counter}></HOCred>
//         <HOCblue cmp={Counter}></HOCblue>
//         <HOCgreen cmp={Counter}></HOCgreen>
//         <HOCyellow cmp={Counter}></HOCyellow>
//     </>
//   );
// }


// function HOCred(props)
// {
//   return <h3 style={{backgroundColor:"red" ,width:100}}>Red <props.cmp/></h3>
// }

// function HOCblue(props)
// {
//   return <h3 style={{backgroundColor:"blue" ,width:100}}>blue <props.cmp/></h3>
// }

// function HOCgreen(props)
// {
//   return <h3 style={{backgroundColor:"green" ,width:100}}>green <props.cmp/></h3>
// }

// function HOCyellow(props)
// {
//   return <h3 style={{backgroundColor:"yellow" ,width:100}}>yellow <props.cmp/></h3>
// }

// function Counter()
// {
//     const [count, setCount] =useState(0);
//     return(
//         <>
//             <h2>count:{count}</h2>
//             <button onClick={()=>setCount(count+1)}>Update</button>
//         </>
//     );
// }


// pr45 44 and 46
//function App()
// {
//   return(
//     <>
//      <BrowserRouter>
//       <Links/>
//       <Paths/>
     
//      </BrowserRouter> 
    
//     </>
//   );
// }


// pr47

// function App()
// {
//   const user =[
//     {
//       name:'Bharagv',
//       id:1
//     },
//     {
//       name:'Arpit',
//       id:2
//     },
//     {
//       name:'Henil',
//       id:3
//     },
//     {
//       name:'jay',
//       id:4
//     },
//   ]
//   return(
//     <>
//       <BrowserRouter>
//       {
//         user.map((item)=>
//           <div>  <Link to={"/user1/"+item.id+"/"+item.name}>{item.name}</Link><br/></div>
//         )
//       }
//       <Route path="/user1/:id/:name"><User1/></Route>
      
//       </BrowserRouter>
//     </>
//   );
// }


// API 

function App()
{
    const [api ,setApi] =useState("");
    const [cate ,setcate] =useState("");

    function saveuser(){
        const data={api , cate}
        fetch("https://api.publicapis.org/entries",{
            method:"post",
            headers:{
                'Accept':'Application/json',
                'content-type':'Application/json'
            },
            body:JSON.stringify(data)
        }).then( (result)=>{
            result.json().then( (resp)=>{
                console.warn("resp" ,resp)
            })
        })
        
        
    }
    return(
        <>
            {/* <API_/> */}

            <h1>Post APi method</h1>
            
            <input type="text" value= {api} name="API" onChange={(e)=>{setApi(e.target.value)}}/><br/><br/>
            <input type="text" name="category"  value={cate} onChange={(e)=>{setcate(e.target.value)}}/><br/><br/>
           
            <button onClick={saveuser}>Add</button>
        </>
    );
}
export default App;
