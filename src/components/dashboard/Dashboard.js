import VisibleNavBar from "../navbar/VisibleNavBar"

const Dashboard = () => {
    //pings the server upon loading, getting user information

    return(
        <div>
            <VisibleNavBar />
            <div>
                <div>
                    {/* Shows stats and profile pic */}
                    <ProfilePicture />
                    <ProfileStats />
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