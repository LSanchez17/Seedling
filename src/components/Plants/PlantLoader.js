import Loading from "../utility/Loading";

const PlantLoader = ({plantList}) => {
    //this handles the display as we scroll\

    let plantCard = plantList.map(plant => {
        //clicking on the div should take to plantForm page
        //ADD IT
        return(
            <div>
                <img src={plant.plantPicture} alt={plant.plantName} />
                <h3>{plant.plantName}</h3>
                <p>{plant.plantNotes}</p>
            </div>
        );
    });

    return(
        <div>
            {plantCard ? plantCard : <Loading />}
        </div>
    );
};

export default PlantLoader;