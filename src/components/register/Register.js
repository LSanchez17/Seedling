const Register = () => {
    return (
        <div>
            <form>
                <label htmlFor='name'>Name: </label>
                <input type='text' />

                <label htmlFor='email'>Email: </label>
                <input type='email'/>

                <label htmlFor='password'>Password: </label>
                <input type='password' />

                <label htmlFor='password2'>Confirm Password: </label>
                <input type='password' />

                <label htmlFor='zip'>Zip Code</label>
                <input type='number' />

                <button type='submit'>Register!</button>
            </form>
        </div>
    );
};

export default Register;