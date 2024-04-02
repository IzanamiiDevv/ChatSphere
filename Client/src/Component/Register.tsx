import { useState } from "react";

export default function Register({addName , setState}:{addName:any,setState:any}) {

    const [ name, setName ] =useState('user');

    const _register = () => {
        addName();
        setState();
    }
    return (
        <div>
            <h1>Wowo</h1>
        </div>
    )
}