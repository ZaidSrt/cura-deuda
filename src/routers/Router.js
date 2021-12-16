import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Pockemon from "../pages/Pockemon";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/pockemon/:id' component={Pockemon}/>
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
