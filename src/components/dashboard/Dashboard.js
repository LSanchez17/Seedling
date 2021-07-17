
const Dashboard = () => {
    //pings the server upon loading, getting user information

    return(
        <div>
            <p>I'm the dashboard!</p>
            <h1>I should show the following, and follow the styling mockup</h1>
            <ul>
                <li>Navbar at top, highlighting where I'm at</li>
                <li>Profile pic of user</li>
                <li>Stats of user(plants, friends, etc</li>
                <li>"Card" on right side</li>
                <li>Inside card, a carousel of plants the user has</li>
                    <ul>
                        <li>Their needs, if any</li>
                        <li>A button to acknoledge its taken care of</li>
                        <li>Arrows to traverse if needed</li>
                    </ul>
                <li>A weather forecast banner for the next two days</li>
                <li>A form for adding new plants!</li>
                <li>Name, date watered(with calendar thigny), date trimmed, date repotted, image upload, notes, submit</li>
            </ul>
        </div>
    );
};

export default Dashboard;