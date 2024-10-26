import img from "./z.png";

function Zaqueo({ className, rotateImg }) {
    return <img src={img} className={className} style={{ transform: rotateImg ? "scaleX(-1)" : "scaleX(1)" }} />
}

export { Zaqueo };