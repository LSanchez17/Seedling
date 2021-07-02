
const Login = () => {
    return (
        <div>
            <form>
                <label htmlFor='email'>Email:</label>
                <input type='email' />

                <label htmlFor='password'>Password:</label>
                <input type='password' />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;