import Tilt from "react-parallax-tilt";
import PoemBox from "./PoemBox";
import "./App.css";

function App() {
  return (
    <>
      <div className="title">
        <h1>On Modern Art</h1>
        <h2>Made by Zaara using Google Gemini</h2>
      </div>
      <Tilt>
        <PoemBox></PoemBox>
      </Tilt>
    </>
  );
}

export default App;
