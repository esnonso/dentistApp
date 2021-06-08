import NavbarComponent from './Components/Navbar'
import Main from './Main'
import Footer from './Components/Footer'
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
