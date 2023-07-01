import { useContext } from "react";
import Button from "../Button/Button";
import AuthContext from "../../Context/AuthContext/AuthContext";

export default function Login ()  {
    const authCtx = useContext(AuthContext)
    return (
        <>
        <h1>Please Login</h1>
        <Button onclick={authCtx.logIn} text="Log In" />
        </>
    )
}