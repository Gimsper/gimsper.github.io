import img from "./a.png";

function Tree([ className ]) {
    return <img src={img} className={className} />
}

export { Tree };