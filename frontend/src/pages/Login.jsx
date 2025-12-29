import { useState } from "react";
import { login } from "../api";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');
    const [message, setMessage ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const res = await login(username, password);
        if(res.error){
            setMessage(result.error);
        } else {
            setMessage(`Logged in successfully.`);
            console.log("User data:", result);
        }
    }

    return (
        <div className="form-container"> 
            <h1 className="title">Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usr_name">Username:</label> <br/>
                    <input id="usr_name" type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label> <br/>
                    <input id="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Login;