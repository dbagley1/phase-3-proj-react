import logo from './logo.svg';
import './App.css';
import ColorPalette from './components/ColorPalette';
import { useEffect, useState } from 'react';
import PaletteList from './components/PaletteList';


function App() {
  const [palettes, setPalettes] = useState([]);
  const [randomPalettes, setRandomPalettes] = useState([]);

  function getColorPalettes() {
    return fetch('http://localhost:4000/palettes')
      .then(response => response.json());
  }

  function getRandomColorPalettes() {
    return fetch('http://localhost:4000/palettes/random/5/?per_palette=5')
      .then(response => response.json());
  }

  function deletePalette(palette) {
    fetch(`http://localhost:4000/palettes/${palette.id}`, { method: "delete" })
      .then((response) => console.log(response))
      .then(() => {
        getColorPalettes().then((palettes) => {
          setPalettes(palettes);
        }
        );
      });
  }

  function randomizePalettes() {
    getRandomColorPalettes().then(palettes => {
      console.log(palettes);
      setRandomPalettes(palettes);
    });
  }

  function updatePalettes() {
    getColorPalettes()
      .then(palettes => {
        console.log(palettes);
        setPalettes(palettes);
      })
      .catch(error => {
        console.log(error);
      });

  }

  function savePalette(palette) {
    fetch("http://localhost:4000/palettes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(palette)
    })
      .then(updatePalettes)
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    updatePalettes();
    randomizePalettes();
  }, []);

  return (
    <div className="App">
      <h1>Saved Palettes</h1>
      <PaletteList palettes={palettes} birdPreview={true} deleteButton={true} deletePalette={deletePalette} savePalette={savePalette} />
      <h1>Random Palettes</h1>
      <button onClick={() => randomizePalettes()}>Randomize Palettes</button>
      <PaletteList palettes={randomPalettes} birdPreview={true} saveButton={true} deletePalette={deletePalette} savePalette={savePalette} />
    </div>
  );
}

export default App;
