
import './App.css';
import About from './About';
import Home from './Home';
import Mylist from './Mylist';
import { Route, Routes,Link } from 'react-router-dom';

//route paths are not case sensitive
function App() {
  return (
    <div className="App">

      <nav>
        <ul>
        <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/MyList">MyList</Link>
          </li>
        </ul>
      </nav>

 
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mylist/:id' element={<Mylist/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
