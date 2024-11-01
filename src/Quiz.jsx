import React, { useState } from 'react';
import './Quiz.css';


// Import houses images//Importa las imágenes de las casas
import gryffindorLogo from './logos/gryffindor.jpg';
import slytherinLogo from './logos/slytherin.jpg';
import ravenclawLogo from './logos/raveclaw.jpg';
import hufflepuffLogo from './logos/hufflepuff.jpg';


function Quiz() {
    const [house, setHouse] = useState('');
    const [spell, setSpell] = useState('');
    const [creature, setCreature] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0); // Current question control//Controla la pregunta actual
    const [showResult, setShowResult] = useState(false); // State to control if renders resoult//Estado para controlar si mostramos el resultado

    // handle House change//Controla el cambio de casa
    const handleHouseChange = (selectedHouse) => {
        setHouse(selectedHouse);
    };

    const handleNext = () => {
        if (currentQuestion < 2) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true); // Show result at last question//Mostrar el resultado cuando se llegue a la última pregunta
        }
    };

    //Restart quiz//Boton para reiniciar el cuestionario
    const handleRestart = () => {
        setHouse('');
        setSpell('');
        setCreature('');
        setCurrentQuestion(0);
        setShowResult(false);
    };


    return (
        <div className="quiz-container">
            {/* Mostrar preguntas si no se ha enviado el formulario */}
            {!showResult && (
                <>
                    {currentQuestion === 0 && (
                        <div className={`question-block ${currentQuestion === 0 ? 'active' : 'hidden'}`}>
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
                                    <img src={gryffindorLogo} alt="Logo de gryffindor" className="house-logo" />
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="house"
                                        value="slytherin"
                                        onChange={() => handleHouseChange('slytherin')}
                                    />
                                    Slytherin
                                    <img src={slytherinLogo} alt="Logo de slytherin" className="house-logo" />
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="house"
                                        value="ravenclaw"
                                        onChange={() => handleHouseChange('ravenclaw')}
                                    />
                                    Ravenclaw
                                    <img src={ravenclawLogo} alt="Logo de ravenclaw" className="house-logo" />
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="house"
                                        value="hufflepuff"
                                        onChange={() => handleHouseChange('hufflepuff')}
                                    />
                                    Hufflepuff
                                    <img src={hufflepuffLogo} alt="Logo de hufflepuff" className="house-logo" />
                                </label>
                            </div>
                            <button onClick={handleNext} className="next-button">Next</button>
                        </div>
                    )}

                    {currentQuestion === 1 && (
                        <div className={`question-block ${currentQuestion === 1 ? 'active' : 'hidden'}`}>
                            <h2>Which is your favourite spell?</h2>
                            <input
                                type="text"
                                placeholder="Write your favourite spell..."
                                value={spell}
                                onChange={(e) => setSpell(e.target.value)}
                            />
                            <button onClick={handleNext} className="next-button">Next</button>
                        </div>
                    )}

                    {currentQuestion === 2 && (
                        <div className={`question-block ${currentQuestion === 2 ? 'active' : 'hidden'}`}>
                            <h2>Which is your favourite magic creature?</h2>
                            <select value={creature} onChange={(e) => setCreature(e.target.value)}>
                                <option value="">Select one magic creature</option>
                                <option value="hipogrifo">Hippogryph</option>
                                <option value="dragón">Dragon</option>
                                <option value="elfo">House elf</option>
                            </select>
                            <button onClick={handleNext} className="next-button">Submit</button>
                        </div>
                    )}
                </>
            )}

            {/* Mostrar el resultado cuando se haya completado el cuestionario */}
            {showResult && (
                <div className="result-container">
                    <h2>Quiz result</h2>
                    <p>Preferred house: {house}</p>
                    <p>Favourite spell: {spell}</p>
                    <p>Favourite magic creature: {creature}</p>
                    {house && (
                        <img
                            src={`/logos/${house}.jpg`}
                            alt={`Logo de ${house}`}
                            className="logo"
                        />
                    )}
                    <button onClick={handleRestart}>Start again</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;