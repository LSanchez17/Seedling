
const Login = () => {
    return (
        <div className='bg-white p-3 m-20 rounded-lg'>
            <form className='p-20 m-5 grid justify-items-center'>
                <div>
                    <label className='bg-yellow-400 bg-opacity-25 p-2 m-2' htmlFor='email'>Email: </label>
                    <input className='bg-indigo-200 rounded-sm p-2 m-2' type='email' name='email' id='email' placeholder='Email...'></input>
                </div>

                <div>
                    <label className='bg-yellow-400 bg-opacity-25 p-2 m-2' htmlFor='password'>Password: </label>
                    <input className='bg-indigo-200 rounded-sm p-2 m-2' type='password' name='password' id='password' placeholder='password...'></input>
                </div>

                <button className='bg-green-200 p-2 m-2 rounded-sm' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;