import '../styles/index.css';
import NavBar from '../components/navbar/NavBar';
import Routes from '../helpers/routes/Routes';

function App() {
  //We need routes to turn this into a SPA
  return (
    <div className='h-screen bg-gradient-to-r from-green-400 via-indigo-200 to-green-400'>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
