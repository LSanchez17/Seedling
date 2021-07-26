import VisibleNavBar from "../navbar/VisibleNavBar"
import ProfilePicture from "../Profile/ProfilePicture"
import ProfileStats from "../Profile/ProfileStats"


const Dashboard = () => {
    //pings the server upon loading, getting user information

    return(
        <div>
            <VisibleNavBar />
            <div>
                <div>
                    {/* Shows stats and profile pic */}
                    <div>
                        <ProfilePicture />
                    </div>
                    <div>
                        <ProfileStats />
                    </div>
                </div>

                <div>
                    <div>
                        {/* Plant alerts go here */}
                        <PlantAlerts />
                    </div>
                    <div>
                        {/* Mini Weather  */}
                        <WeatherMini />
                    </div>
                    <div>
                        {/* Form for adding new plants */}
                        <PlantForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;