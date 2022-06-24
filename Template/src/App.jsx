import { useState } from 'react';
import './App.css';
import FilterVoyage from './component/Filter-voyages/FilterV';
import SignIn from './component/Sign-in/Sign-in';
import Car from "./component/car.png";
import About from './component/About/About';
import Cards from './component/Cards/Cards';
import Reserve from './component/Reserve/Reserve';

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
              <Result close={setPosition} />
            </div> :
            position === 3 ? <Reserve close={setPosition} /> :
              ""
      }
      <div className='container h-max'>
        <Welcome />
        <div className='mt-5 tt-50'>
          <p className="display-6 w-100 text-center text-light txt-shadow">
            Today's Offers
          </p>
          <div className='w-100 d-flex justify-content-between'>
            <Offers />
          </div>
        </div>
      </div>
      <About className="tt-20" />
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

function Result({ close }) {
  return (
    <div onClick={() => close(3)} className="mt-5 container d-flex justify-content-around">
      <Cards className="m-2 w-100" color={"alert-dark"} title="Offers">
        Premium 50.000AR
        <hr />
      </Cards>
      <Cards className="m-2 w-100" title="Vehicles" color={"alert-dark"}>
        5031 WWT
        <hr />
      </Cards>
      <Cards color={"alert-dark"} className="m-2 w-100" title="Departure time">
        10 : 30 Am
        <hr />
      </Cards>
      <Cards color={"alert-dark"} className="m-2 w-50" title="Free places">
        1, 2, 3, 4, 10
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


function Today({ title, className, rate, departure, arrival, date, time }) {
  return (
    <div className={"mt-5 rounded-3 " + className}>
      <div className='p-2'>
        <Cards title={title} color={"alert-success"}></Cards>
        <p>Rate : {rate}</p>
        <hr />
        <p>Departure : {departure}</p>
        <hr />
        <p>Arrival : {arrival}</p>
        <hr />
        <p>Departure date : {date}</p>
        <hr />
        <p>Departure time : {time}</p>
      </div>
    </div>
  );
}



function Offers() {
  return (
    <>
      <Today
        title="Antsirabe, simple travel"
        className="bg-info"
        rate="15000"
        departure="Antananarivo"
        arrival="Antsirabe"
        date="22-06-25"
        time="10:00 Am"
      />
      <Today
        title="Toamasina, simple travel"
        className="bg-info"
        rate="20000"
        departure="Antananarivo"
        arrival="Toamasina"
        date="22-06-25"
        time="10:00 Am"
      />
      <Today
        title="Toliara, Vip travel"
        className="bg-success "
        rate="50000"
        departure="Antananarivo"
        arrival="Toliara"
        date="22-06-25"
        time="1:00 Pm"
      />
      <Today
        title="Toamasina, Vip travel"
        className="bg-success "
        rate="50000"
        departure="Antananarivo"
        arrival="Toamasina"
        date="22-06-25"
        time="1:00 Pm"
      />
    </>
  );
}
export default App;
