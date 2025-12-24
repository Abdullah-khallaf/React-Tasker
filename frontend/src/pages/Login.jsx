
function login() {
    return (
        <div class="form-container"> 
            <h1 class="title">Login Page</h1>
            <form action="">
                <div>
                    <label for="usr_name">Username:</label> <br/>
                    <input id="usr_name" type="text" placeholder="Username" />
                </div>
                
                <div>
                    <label for="password">Password:</label> <br/>
                    <input id="password" type="password" placeholder="Password" />
                </div>
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default login;