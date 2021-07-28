
const EditUserProfile = () => {
    
    const deleteProfile = async () => {

        return;
    }

    return(
        <div>
            <form>
                <label htmlFor='profilePic'>Profile picture</label>
                <input type=''></input>

                <label htmlFor='userName'>Name: </label>
                <input type='text'></input>

                <label htmlFor='zipcode'>Zipcode: </label>
                <input type='text'></input>

                <label htmlFor='privateProfile'>Private?</label>
                <input type='checkbox'></input>

                <button type='submit'>Update</button>
            </form>
            <div>
                <button onClick={deleteProfile}>Delete Profile :(</button>
            </div>
        </div>
    );
};

export default EditUserProfile;