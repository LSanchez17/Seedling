
const PlantForm = () => {

    return(
        <div>
            <form>
                <label htmlFor='platName'>Name </label>
                <input type='text' id='plantName' placeholder='Enter plant name'></input>

                <label htmlFor='wateredDate'></label>
                <input type='date' id='wateredDate' placeholder='Date last watered'></input>

                <label htmlFor='trimmedDate'></label>
                <input type='date' id='trimmedDate' placeholder='Date last trimmed'></input>

                <label htmlFor='repottedDate'></label>
                <input type='date' id='repottedDate' placeholder='Date last repotted'></input>

                <label htmlFor='plantNotes'></label>
                <input type='text' id='plantNotes' placeholder='Enter any notes you want'></input>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default PlantForm;