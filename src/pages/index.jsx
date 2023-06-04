import React from "react"
import { Switch, Route } from "react-router-dom"
import Login from "./Login"
import SignIn from "./SignIn"
import InfoPatient from "./InfoPatient"
import InfoDoctor from "./InfoDoctor"

function Page() {
    return (
        <Switch>
            <Route path="/Proj2_DBI/SignIn">
                <SignIn />
            </Route>
            <Route path="/Proj2_DBI/InfoPatient">
                <InfoPatient fullscreen />
            </Route>
            <Route path="/Proj2_DBI/InfoDoctor">
                <InfoDoctor fullscreen />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    )
}

// export { navigate }
export default Page
