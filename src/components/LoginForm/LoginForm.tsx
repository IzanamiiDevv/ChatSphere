import { Fragment, useState } from "react";

interface LoginFromProps {
    setName: (name: string) => void,
    setLogin: (isLog: boolean) =>  void
}

const LoginForm = ({ setName, setLogin }: LoginFromProps) => {
    const [ username, setUsername ] = useState("");

    return (
        <Fragment>
            <h1>Login Form</h1>
            <label>Name: </label>
            <input type="text" onChange={(e) => {
                setUsername(e.target.value);
            }} onClick={() => setUsername("")}/>
            <button onClick={() => {
                setLogin(true);
                setName(username);
            }}>Enter</button>
        </Fragment>
    )
};

export default LoginForm;