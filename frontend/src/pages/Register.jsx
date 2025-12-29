import { useState } from "react";
import { register } from "../api";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');
    const [message, setMessage ] = useState('');

    async function handleSubmit(e){
        e.preventDefault(e);

        // validation
        if (!username || !password){
            setMessage("All fields are required.");
            return;
        }

        try {
            const res =  await register(username, password);

            if(res.error){
                setMessage (res.error);
            }else{
                setMessage("Registered successfully. You can login now.");
                console.log("REGISTER RESPONSE:", res);
                
                localStorage.setItem('userDetails', JSON.stringify({
                    username: username,
                    token: res.token    
                }))
            }
        } catch (error){{
            setMessage("Registration failed. Please try again later.");
        }

    }
}
    return (
         <div className="form-container"> 
            <h1 className="title">Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usr_name">Username:</label> <br/>
                    <input id="usr_name" type="text" value ={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label> <br/>
                    <input id="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <button type="submit">Sign Up</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    )
}

export default Register;