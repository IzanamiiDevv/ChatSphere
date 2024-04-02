import { useState } from "react";
import './Register.css'

export default function Register({addName , setState}:{addName:any,setState:any}) {

    const [ name, setName ] = useState('');
    const [ error, setError ] = useState<undefined | string>(undefined);

    const register = () => {
        if (!name || name.trim() === "") {
            setError("Can't Enter With Empty Name");
            return;
        }
        
        addName(name);
        setState(true);
    }
    return (
        <div className="login-box">
            <h2>Enter a Name</h2>
            <form>
                <div className="user-box">
                    <input type="text" required  onChange={(e)=>{
                        setName(e.target.value);
                    }} value={name}/>
                    <label>Username</label>
                </div>
                <a onClick={()=>{
                    register();
                }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
            <p id="error">{error}</p>
        </div>
    )
}