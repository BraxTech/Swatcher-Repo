import './App.css';
import DetailsPage from './DetailsPage/DetailsPage';
import Home from './Home';
import{Route, BrowserRouter as Router, Routes, useParams} from "react-router-dom";

function App() {

  
  return (
    <Router>
    <div className="App">
      <>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/color/:id" element={<DetailsPage/>}/>
      </Routes>
      </>
    
    </div>
    </Router>
  );
}

export default App;
