import { useContext } from "react"
import AuthContext from "../../Context/AuthContext/AuthContext"
import Home from "../Home/Home"
import Login from "../Login/Login"

export default function AuthHandler() {
    const authCtx = useContext(AuthContext)
    return (
        authCtx.isLoggedIn ? <Home /> : <Login />
    )
}