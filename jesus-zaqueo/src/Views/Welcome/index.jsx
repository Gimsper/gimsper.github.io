import "./Welcome.css";
import { useState } from "react";

function Welcome({ setShow }) {
    const [showQuestion, setShowQuestion] = useState(0);
    const questions = [
        "¿Te gusta la arepa con queso?",
        "¿Comprarías coca cola sabor oreo?",
        "¿Messi o Ronaldo?",
        'https://www.canva.com/'
    ]

    const [view, setView] = useState("welcome");

    setView("record")

    return (
        <>
            {/* <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Proyecto Cristología</title>
                <link rel="stylesheet" href="styles.css">
            </head> */}
                <header>
                    <h1>Jesús y Zaqueo</h1>
                </header>

                <main>
                    <p>
                        { questions[showQuestion] }
                        {/* Bienvenido al juego de Zaqueo. En este pasaje del Evangelio de Lucas (19:1-10), Zaqueo, un hombre rico y jefe de los publicanos, escucha que Jesús va a pasar por su ciudad. A pesar de su riqueza, siente que le falta algo en su vida, y su deseo de ver a Jesús lo lleva a subir a un árbol para poder encontrarlo. Esta historia nos enseña sobre la búsqueda de la verdad, el arrepentimiento y la redención. ¡Prepárate para acompañar a Zaqueo en su ascenso y responder preguntas que te llevarán a reflexionar sobre tu propia vida! */}
                    </p>

                    <div className="button-container">
                        <button onClick={() => window.location.href='https://www.canva.com/'}>Botón 1</button>
                        <button onClick={() => setShowQuestion(showQuestion+1 >= questions.length ? showQuestion : showQuestion+1)}>Botón 2</button>
                    </div>
                </main>
        </>
    )
}

export { Welcome };