import VisibleNavBar from "../navbar/VisibleNavBar"

const Dashboard = () => {
    //pings the server upon loading, getting user information

    return(
        <div>
            <VisibleNavBar />

            <div>
                <div>
                    <ProfilePicture />
                    <ProfileStats />
                </div>

                <div>
                    <div>
                        <PlantAlerts />
                    </div>
                    <div>
                        <WeatherMini />
                    </div>
                    <div>
                        <PlantForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;