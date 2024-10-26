import { FinalImg } from "./FinalImg";
import { Zaqueo } from "./Zaqueo";
import { Tree } from "./Tree";

function Images({ type, className, rotate }) {
    switch (type) {
        case "zaqueo":
            return <Zaqueo className={className} rotateImg={rotate} />;
        case "final-page":
            return <FinalImg className={className} />;
        case "tree":
            return <Tree className={className} />;
    }
}

export { Images };