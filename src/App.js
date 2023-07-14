import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Footer from './components/Footer';
import Bottom from './bottom.js';
import Middle from './Middle.js';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
        </Routes>
        <Middle/>
        <Bottom/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
