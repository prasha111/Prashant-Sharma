import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import LandingPage from './components/landingPage';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <Header/> */}
      <LandingPage/>
      
      
    </div>
  );
}

export default App;
