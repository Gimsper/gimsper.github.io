import Swal from "sweetalert2";
import "./SaveAnswer.css";

function SaveAnswer() {
    const save = () => {
        const text = document.getElementById("textAnswer").value;
        if (text.length > 0) {
            let localItem = JSON.parse(localStorage.getItem("answers"));
            if (localItem) {
                localStorage.removeItem("answers");
                localItem.push(text);
                localStorage.setItem("answers", JSON.stringify(localItem));
            } else {
                let newItem = [ text ];
                localStorage.setItem("answers", JSON.stringify(newItem));
            }

            Swal.fire({
                icon: "success",
                title: "¡Respuesta guardada!",
                confirmButtonText: "Continuar",
                showCloseButton: true
            }).then(() => {
                Swal.fire({
                    icon: "question",
                    title: "¿Quieres ingresar otra respuesta?",
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Guardar otra",
                    cancelButtonText: "Regresar al inicio"
                }).then((result) => {
                    if(!result.isConfirmed) {
                        window.location.reload();
                    } else {
                        document.getElementById("textAnswer").value = "";
                    }
                })
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "¡El campo está vacío!",
                confirmButtonText: "Continuar",
                showCloseButton: true
            });
        }
    }

    return (
        <div className="backimage">
            <div className="container-answer">
                <h1>¡Jesús te ha visto!</h1>
                <div>
                    <span>“El Hijo del Hombre vino a buscar y a salvar lo que se había perdido (Lucas 19:10). Reflexiona: ¿Hay aspectos de tu vida que sientes que están ‘perdidos’ o alejados de lo que realmente deseas ser? ¿Qué compromiso asumirás para buscar tu propio camino de regreso, al igual que Zaqueo lo hizo al encontrarse con Jesús?”</span>
                    <textarea id="textAnswer"></textarea>
                </div>
                <footer>
                    <button onClick={() => save()}>Guardar compromiso</button>
                </footer>
            </div>
        </div>
    );
}

export { SaveAnswer };