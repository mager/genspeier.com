import './App.css';
import genImage from './gen-image.jpg'

function App() {
  return (
    <div className="main">
      <h5>In loving memory</h5>
      <div className="image">
        <img src={genImage} alt="Genevieve Speier" />
      </div>
      <h1>
        <span>G</span>enevieve <span>S</span>peier
      </h1>
      <p class="era">
        <em>May 2, 1948 – January 25, 2021</em>
      </p>
    </div>
  );
}

export default App;
