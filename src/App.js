import './App.scss';
import Header from "./Component/Header/Header"
import Footer from './Component/Footer/Footer';
import { BrowserRouter  , Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
     <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </main>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
