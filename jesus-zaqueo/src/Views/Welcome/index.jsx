import "./Welcome.css";

function Welcome({ setShow }) {
    const urlCanva = "https://relacionespublicasevolucion.my.canva.site/zaqueo-y-jes-s";

    return (
        <>
            <section className="welcome">
                <header>
                    <h1>Jesús y Zaqueo</h1>
                </header>
                <main className="welcome">
                    <h2>¡Bienvenido!</h2>
                    <p>
                        Bienvenido al juego de Zaqueo. En este pasaje del Evangelio de Lucas (19:1-10), Zaqueo, un hombre rico y jefe de los publicanos, escucha que Jesús va a pasar por su ciudad. A pesar de su riqueza, siente que le falta algo en su vida, y su deseo de ver a Jesús lo lleva a subir a un árbol para poder encontrarlo. Esta historia nos enseña sobre la búsqueda de la verdad, el arrepentimiento y la redención. ¡Prepárate para acompañar a Zaqueo en su ascenso y responder preguntas que te llevarán a reflexionar sobre tu propia vida!
                    </p>

                    <div className="button-container">
                        <button onClick={() => setShow(1)}>¡JUGAR!</button>
                        <button onClick={() => setShow(4)}>Ver compromisos</button>
                        <button onClick={() => window.open(urlCanva) }>Conoce más del pasaje</button>
                    </div>
                </main> 
            </section>
        </>
    )
}

export { Welcome };