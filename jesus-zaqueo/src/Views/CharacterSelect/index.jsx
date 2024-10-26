import { Images } from "../../Components/Image"
import "./CharacterSelect.css";

function CharacterSelect({ setShow }) {
    return (
        <>
            <header>
                <h1>Jesús y Zaqueo</h1>
            </header>

            <main>
                <div className="content-container">
                    <div className="image-container">
                        <button onClick={() => setShow(2)}>
                            <Images type="zaqueo" />
                        </button>
                    </div>

                    <div className="character-info">
                        <h2>Zaqueo</h2>
                        <p>Descripción y características del personaje: </p>
                        <ul>
                            <li>Rico: Es un hombre próspero, pero su riqueza no le proporciona paz interior.</li>
                            <li>Jefe de los publicanos: Trabaja cobrando impuestos, una profesión que lo ha hecho impopular.</li>
                            <li>Pequeño de estatura: A pesar de ser físicamente pequeño, su deseo de ver a Jesús es grande.</li>
                            <li>Gran deseo de ver a Jesús: Zaqueo está dispuesto a hacer algo poco común (subir a un árbol) para acercarse a Jesús.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export { CharacterSelect };