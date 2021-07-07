import '../styles/App.css';
import NavBar from '../components/navbar/NavBar';
import Routes from '../helpers/routes/Routes';

function App() {
  //We need routes to turn this into a SPA
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
