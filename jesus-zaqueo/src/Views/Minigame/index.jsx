import Swal from "sweetalert2";
import { useState } from "react";
import { Images } from "../../Components/Image";
import "./Minigame.css";

function Minigame({ setShow }) {
    const [showQuestion, setShowQuestion] = useState(0);
    const questions = [
        {
            text: "La multitud no deja avanzar a Zaqueo. Desde un punto de vista actual, ¿Cuál de las siguientes opciones son las “multitudes” que no nos permiten acercarnos a Jesús?",
            answers: [
                { text: "Distracciones y miedos", good: true },
                { text: "La falta de amigos que compartan nuestra fe", good: false },
                { text: "La presencia de pocas iglesias en el sector", good: false },
            ],
        },
        {
            text: "Jesús se compadeció por Zaqueo, sin juzgarlo por sus malas acciones del pasado. ¿Cómo consideras que es una forma correcta de demostrar compasión hacia los demás en nuestra vida diaria?",
            answers: [
                { text: "Evitar relacionarnos con personas que tienen dificultades", good: true },
                { text: "Escuchar a los demás sin prejuicios y ofrecerles apoyo", good: true },
                { text: "Dar consejos sin conocer bien la situación de la otra persona", good: false },
            ],
        },
        {
            text: "Si fueras Zaqueo, ¿Qué harías luego de haberte encontrado con Jesús?",
            answers: [
                { text: "Seguir igual", good: false },
                { text: "Devolver lo que había tomado y ayudar a los pobres", good: true },
                { text: "Abandonar la ciudad", good: false },
            ],
        },
        {
            text: "Según todo lo visto, ¿Cuál consideras que fue la misión de Jesús según este pasaje?",
            answers: [
                { text: "Sanar a los enfermos", good: false },
                { text: "Enseñar a sus discípulos", good: false },
                { text: "Buscar y salvar lo que se había perdido", good: true },
            ],
        },
    ];

    const toggleQuestion = () => {
        if (showQuestion + 1 !== questions.length) {
            setShowQuestion(showQuestion + 1);
        } else {
            setShow(3)
        }
    }

    const verifyAnswer = (good) => {
        if (good) {
            Swal.fire({
                icon: "success",
                title: "¡Excelente!",
                text: "Vamos a la siguiente pregunta",
                confirmButtonText: "Continuar",
                showCloseButton: true
            }).then(() => {
                toggleQuestion();
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "¡Incorrecto!",
                text: "Lo sentimos, vuelve a intentarlo",
                confirmButtonText: "Reintentar",
                showCloseButton: true
            });
        }
    }

    return (
        <>
            <header>
                <h1>Jesús y Zaqueo</h1>
            </header>
            <section className="minigame" style={{ flexDirection: showQuestion % 2 === 0 ? "row" : "row-reverse" }}>
                <Images type="zaqueo" className="img-zaqueo-minigame" rotate={showQuestion % 2 === 0 ? false : true} />
                <main className="welcome" style={{ width: "60%" }}>
                    <p>
                        { questions[showQuestion].text }
                    </p>
                    <article>Seleccione una respuesta:</article>
                    <div className="questions-container">
                        {
                            questions[showQuestion].answers.map((e, i) =>
                                <div>
                                    <button onClick={() => verifyAnswer(e.good)}></button>
                                    <span key={i} onClick={() => verifyAnswer(e.good)}>{e.text}</span>
                                </div>
                            )
                        }
                    </div>
                </main>
            </section>
        </>
    )
}

export { Minigame };