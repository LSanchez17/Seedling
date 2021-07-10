const Register = () => {
    return (
        <div>
            <form className=''>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' id='name' placeholder='Name...'></input>

                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' id='email' placeholder='Email...'></input>

                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' id='password' placeholder='• • • •'></input>

                <label htmlFor='password2'>Confirm Password: </label>
                <input type='password' name='verify' id='verify' placeholder='• • • •'></input>

                <label htmlFor='zip'>Zip Code</label>
                <input type='number' name='zipCode' id='zipCode' placeholder='012345'></input>

                <button type='submit'>Register!</button>
            </form>
        </div>
    );
};

export default Register;