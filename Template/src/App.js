import './App.css';
import FilterVoyage from './component/Filter-voyages/FilterV';

function App() {
  return (<div>
    <div className="nav d-flex justify-content-end" id="mynav">
      <a href="#home" className="home">Sign in</a>
      <a href="#home" className="home">News</a>
      <a href="./index.html" className="home">Home</a>
      <a href="./index.html" className="trans">Toky Trans</a>
    </div>

    <div>
      <FilterVoyage />
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

export default App;
