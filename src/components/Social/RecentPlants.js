import Loading from "../utility/Loading"

const RecentPlants = ({plants}) => {

    let displayPlants = plants.map(plant => {
        return(
            <div>
                <img src={plant.plantImage} alt={plant.plantName} />
            </div>
        )
    })

    return(
        <div>
            {displayPlants ? displayPlants : <Loading />}
        </div>
    )
}