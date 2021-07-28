
const PlantBubble = ({plantPic, plantName}) => {


    return(
        <div>
            <img src={plantPic} alt={plantName} />
        </div>
    );
};

export default PlantBubble;