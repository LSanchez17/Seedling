const Register = () => {
    return (
        <div className='bg-white p-3 m-20 rounded-lg'>
            <form className='p-20 m-5 grid justify-items-center'>
                <div>
                    <label className='bg-yellow-200 p-2 m-2' htmlFor='name'>Name: </label>
                    <input className='bg-indigo-200 p-1 m-2' type='text' name='name' id='name' placeholder='Name...'></input>
                </div>
                <div>
                    <label className='bg-yellow-200 p-2 m-2' htmlFor='email'>Email: </label>
                    <input className='bg-indigo-200 p-1 m-2' type='email' name='email' id='email' placeholder='Email...'></input>
                </div>
                <div>
                    <label className='bg-yellow-200 p-2 m-2' htmlFor='password'>Password: </label>
                    <input className='bg-indigo-200 p-1 m-2' type='password' name='password' id='password' placeholder='• • • •'></input>
                </div>
                <div>
                    <label className='bg-yellow-200 p-2 m-2' htmlFor='password2'>Confirm Password: </label>
                    <input className='bg-indigo-200 p-1 m-2' type='password' name='verify' id='verify' placeholder='• • • •'></input>
                </div>
                <div>
                    <label className='bg-yellow-200 p-2 m-2' htmlFor='zip'>Zip Code</label>
                    <input className='bg-indigo-200 p-1 m-2' type='number' name='zipCode' id='zipCode' placeholder='012345'></input>
                </div>

                <button className='bg-green-200 p-2 m-2' type='submit'>Register!</button>
            </form>
        </div>
    );
};

export default Register;