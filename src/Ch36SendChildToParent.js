export default function Ch36ChildToParent(props)
{
    //function Upd

    const data="Bhargav"
    return(
        <>
          <h1>hello</h1>
          <button onClick={()=>props.name(data)}>Update</button>
        </>
    );
}