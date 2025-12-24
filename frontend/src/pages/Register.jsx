import { register } from "../api";

function Register() {
    return (
         <div class="form-container"> 
            <h1 class="title">Register Page</h1>
            <form action="">
                <div>
                    <label for="usr_name">Username:</label> <br/>
                    <input id="usr_name" type="text" placeholder="Username" />
                </div>
                
                <div>
                    <label for="password">Password:</label> <br/>
                    <input id="password" type="password" placeholder="Password" />
                </div>
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;