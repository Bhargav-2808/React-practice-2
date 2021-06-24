import { withRouter } from "react-router";

function User1(props)
{
    return(
        <>
            <h1>Dynamic Routing </h1>
            <h1>User No {props.match.params.id}</h1>
            <h1>User name {props.match.params.name}</h1>
        </>
    );
}

export default withRouter(User1);