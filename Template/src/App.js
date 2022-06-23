import { useState } from 'react';
import './App.css';
import FilterVoyage from './component/Filter-voyages/FilterV';
import SignIn from './component/Sign-in/Sing-in';

function App() {
  const [position, setPosition] = useState(0);

  return (
    <div>
      <div className="nav d-flex justify-content-end" id="mynav">
        <a href="#" className="home" onClick={() => setPosition(2)}>Travel</a>
        <a href="#" className="home" onClick={() => setPosition(1)}>Sign in</a>
        <a href="#" className="home">News</a>
        <a href="#" className="home" onClick={() => setPosition(0)}>Home</a>
        <a href="./index.html" className="trans">Toky Trans</a>
      </div>

      <div>
        {
          position === 1 ? <SignIn close={setPosition} /> :
            position === 2 ? <FilterVoyage close={setPosition} /> :
              ""
        }
      </div>

      <footer>
        <div className="footer-gray">
          <div className="footer-custom">
            <h3>2021-2022</h3>
            <p>@Created by an authentic team :D</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/**
 * <FilterVoyage />
 */

export default App;
