import './App.css';
import genImage from './gen-image.jpg'
import { Button } from '@material-ui/core'

const handleClick = (event) => {
  // Redirect the user to the obituary page
  window.open("https://www.legacy.com/us/obituaries/ourmidland/name/genevieve-speier-obituary?pid=197655443", "_blank");
}

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
      <Button onClick={handleClick} variant="outlined">Visit Obituary Page</Button>
    </div>
  );
}

export default App;
