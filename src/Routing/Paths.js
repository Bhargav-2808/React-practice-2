import {Route , Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error404 from './Error404'

export default function Paths()
{
    return(
    <>
        <Switch>
        <Route path="/" exact={true}><Home/></Route>
        <Route path="/About"><About/></Route>
        {/* <Route path="/Routing/Conatct"><Contact/></Route> */}
        <Route path="*"><Error404/></Route>
        </Switch>
    </>
    );

}