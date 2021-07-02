
const Signup = () => {
    return (
        <div>
            <form>
                <label htmlFor='name'>Name:</label>
                <input type='text' />

                <label htmlFor='email'>Email:</label>
                <input type='email' />

                <label htmlFor='zip'>Zip Code:</label>
                <input type='text' />

                <label htmlFor='password'>Password:</label>
                <input type='password' />

                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input type='password' />

                <button type='submit'>Sign up!</button>
            </form>
        </div>
    );
};

export default Signup;