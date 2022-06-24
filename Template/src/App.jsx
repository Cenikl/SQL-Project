import { useState } from 'react';
import './App.css';
import FilterVoyage from './component/Filter-voyages/FilterV';
import SignIn from './component/Sign-in/Sign-in';
import Car from "./component/car.png";
import About from './component/About/About';
import Cards from './component/Cards/Cards';
function App() {
  const [position, setPosition] = useState(0);

  return (
    <div>
      <div className="nav" id="mynav">
        <div className="f-b-40 d-flex align-items-center">
          <img src={Car} className="w-10 h-5 m-2" />
          <a href="#" className='home'>TokyTrans</a>
        </div>
        <div className='d-flex f-b-60 justify-content-end'>
          <a href="#" className="home" onClick={() => setPosition(2)}>Travel</a>
          <a href="#" className="home" onClick={() => setPosition(1)}>Sign in</a>
          <a href="#" className="home" onClick={() => setPosition(0)}>Home</a>
        </div>
      </div>
      {
        position === 1 ? <SignIn close={setPosition} /> :
          position === 2 ?
            <div>
              <FilterVoyage close={setPosition} />
              <Result />
            </div> :
            ""
      }
      <div className='h-max'>

        <Welcome />
        <About className="tt-50" />
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

function Result() {
  return (
    <div className="mt-5 container d-flex justify-content-around">
      <Cards className="m-2 w-100" title="Offres">
        Premium 3000
        <hr />
      </Cards>
      <Cards className="m-2 w-100" title="Vehicles">
        5031 WWT
        <hr />
      </Cards>
      <Cards className="m-2 w-100" title="Departure time">
        14h : 30
        <hr />
      </Cards>
    </div>
  );
}

/**
 * <FilterVoyage />
 */

function Welcome() {
  return (
    <div className="container mt-5">
      <h1 className="txt-shadow display-1 text-light">Welcome</h1>
      <p className='txt-shadow display-6 text-light'>
        Do you want to travel in comfort but at an affordable price? <br /> <br />
        You are at the right place
      </p>
    </div>
  );
}

export default App;
