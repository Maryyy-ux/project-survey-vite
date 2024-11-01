import React, { useState } from 'react';
import './App.css';

function Quiz() {
  const [house, setHouse] = useState('');
  const [spell, setSpell] = useState(''); // Estate for prefered spell//Estado para el hechizo favorito
  const [creature, setCreature] = useState(''); // Estate for magic creature//Estado para la criatura mágica favorita
  const [showResult, setShowResult] = useState(false); // Estate to show result//Estado para controlar si mostramos el resultado

  const handleHouseChange = (selectedHouse) => {
    setHouse(selectedHouse);
    document.body.className = selectedHouse; // Selected house image//Cambiar el fondo de pantalla según la casa
  };

  const handleSpellChange = (e) => {
    setSpell(e.target.value); // Handle spell//Guardar el hechizo
  };

  const handleCreatureChange = (e) => {
    setCreature(e.target.value); // Handle creature//Guardar la criatura
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true); // show result//Mostrar resultado al enviar
  };

  return (
    <div className="quiz-container">
      {/* show result if not submitted//Mostrar preguntas si no se ha enviado el formulario */}
      {!showResult && (
        <form onSubmit={handleSubmit}>
          <div className="question-block block-1">
            <h2>Which house do you belong to?</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="house"
                  value="gryffindor"
                  onChange={() => handleHouseChange('gryffindor')}
                />
                Gryffindor
                <img src="./logos/gryffindor.jpg" alt="Logo de Gryffindor" className="house-logo" />
              </label>
              <label>
                <input
                  type="radio"
                  name="house"
                  value="slytherin"
                  onChange={() => handleHouseChange('slytherin')}
                />
                Slytherin
                <img src="./logos/slytherin.jpg" alt="Logo de Slytherin" className="house-logo" loading="lazy" />
              </label>
              <label>
                <input
                  type="radio"
                  name="house"
                  value="ravenclaw"
                  onChange={() => handleHouseChange('ravenclaw')}
                />
                Ravenclaw
                <img src="./logos/ravenclaw.jpg" alt="Logo de Ravenclaw" className="house-logo" loading="lazy" />
              </label>
              <label>
                <input
                  type="radio"
                  name="house"
                  value="hufflepuff"
                  onChange={() => handleHouseChange('hufflepuff')}
                />
                Hufflepuff
                <img src="./logos/hufflepuff.jpg" alt="Logo de Hufflepuff" className="house-logo" loading="lazy" />
              </label>
            </div>
          </div>

          <div className="separator sep-1"></div>

          <div className="question-block block-2">
            <h2>Which is your favourite spell?</h2>
            <input
              type="text"
              placeholder="Write your favourite spell..."
              value={spell}
              onChange={handleSpellChange} // Guardar el hechizo
            />
          </div>

          <div className="separator sep-2"></div>

          <div className="question-block block-3">
            <h2>Which is your favourite magic creature?</h2>
            <label htmlFor="creature-select">Select one magic creature:</label>
            <select id="creature-select" value={creature} onChange={handleCreatureChange}>
              <option value="">Select one magic creature</option>
              <option value="hipogrifo">Hippogryph</option>
              <option value="dragón">Dragon</option>
              <option value="elfo">House elf</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

      {/* Mostrar el resultado cuando se haya enviado el formulario */}
      {showResult && (
        <div className="result-container">
          <h2>Quiz result</h2>
          <p>Prefered house: {house}</p>
          <p>Favourite spell: {spell}</p>
          <p>Favourite magic creature: {creature}</p>
          {house && (
            <img
              src={`/logos/${house}.jpg`}
              alt={`Logo de ${house}`}
              className="logo"
            />
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;

