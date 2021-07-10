
const Login = () => {
    return (
        <div>
            <form>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' placeholder='Email...'></input>

                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' id='password' placeholder='password...'></input>

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;