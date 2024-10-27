import React, { useState } from 'react';

const Quiz = () => {
    // Estados para almacenar las respuestas
    const [house, setHouse] = useState('');
    const [patronus, setPatronus] = useState('');
    const [favouriteSpell, setFavouriteSpell] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Función de manejo de la presentación del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    // Formulario
    return (
        <div className="quiz-container">
            <h1>Harry Potter Quiz</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {/* Pregunta 1: Selección de casa */}
                    <div className="form-group">
                        <label htmlFor="house">¿A qué casa de Hogwarts perteneces?</label>
                        <select
                            id="house"
                            value={house}
                            onChange={(e) => setHouse(e.target.value)}
                            required
                        >
                            <option value="">Elige una opción</option>
                            <option value="Gryffindor">Gryffindor</option>
                            <option value="Hufflepuff">Hufflepuff</option>
                            <option value="Ravenclaw">Ravenclaw</option>
                            <option value="Slytherin">Slytherin</option>
                        </select>
                    </div>

                    {/* Pregunta 2: Radio buttons */}
                    <div className="form-group">
                        <label>¿Cuál es tu patronus?</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="Ciervo"
                                    checked={patronus === 'Ciervo'}
                                    onChange={(e) => setPatronus(e.target.value)}
                                    required
                                />
                                Ciervo
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Nutria"
                                    checked={patronus === 'Nutria'}
                                    onChange={(e) => setPatronus(e.target.value)}
                                />
                                Nutria
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Fénix"
                                    checked={patronus === 'Fénix'}
                                    onChange={(e) => setPatronus(e.target.value)}
                                />
                                Fénix
                            </label>
                        </div>
                    </div>

                    {/* Pregunta 3: Input de texto */}
                    <div className="form-group">
                        <label htmlFor="favouriteSpell">¿Cuál es tu hechizo favorito?</label>
                        <input
                            type="text"
                            id="favouriteSpell"
                            value={favouriteSpell}
                            onChange={(e) => setFavouriteSpell(e.target.value)}
                            required
                        />
                    </div>

                    {/* Botón de enviar */}
                    <button type="submit">Enviar</button>
                </form>
            ) : (
                <div className="summary">
                    <h2>Resumen de tus respuestas:</h2>
                    <p><strong>Casa:</strong> {house}</p>
                    <p><strong>Patronus:</strong> {patronus}</p>
                    <p><strong>Hechizo Favorito:</strong> {favouriteSpell}</p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
