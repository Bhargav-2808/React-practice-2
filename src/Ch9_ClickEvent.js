export default function Ch9_ClickEvent()
{
    const Event_ = () => alert("Event Called")
    return(
        <>
            <button onClick={Event_}>Click Here</button>
        </>
    );
}
