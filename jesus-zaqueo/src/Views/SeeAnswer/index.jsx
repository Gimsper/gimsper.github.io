import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import "./SeeAnswer.css";

function SeeAnswer() {
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        const localItem = JSON.parse(localStorage.getItem("answers"));
        console.log(localItem)
        if (localItem) {
            setAnswers(localItem);
        } else {
            Swal.fire({
                icon: "info",
                title: "No hay compromisos todavia",
                confirmButtonText: "Continuar",
                showCloseButton: true
            }).then(() => {
                window.location.reload();
            })
        }
    }, [])

    return (
        <div className="backimage">
            <div className="container-answer">
                <h1>Compromisos</h1>
                <div className="container-show-answers">
                    {
                        answers.map(e =>
                            <span>{e}</span>
                        )
                    }
                </div>
                <footer>
                    <button onClick={() => window.location.reload()}>Regresar al inicio</button>
                </footer>
            </div>
        </div>
    );
}

export { SeeAnswer };