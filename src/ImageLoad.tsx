import { useState } from "react";
import { motion } from "framer-motion";
import './App.css'

export const ImageLoad = (props) => {
    const { src, onClick, srcSet } = props

    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 600);
    };

    return (
        <div className="App">
            <div
                className={`${pulsing ? "pulse" : ""} loadable`}
                style={{ background: "#4a4a4a" }}
            >
                <motion.img
                    initial={{ height: "16rem", opacity: 0 }}
                    onClick={onClick}
                    style={{ height: imageLoading ? "6rem" : "auto" }}
                    animate={{
                        height: imageLoading ? "16rem" : "auto",
                        opacity: imageLoading ? 0 : 1
                    }}
                    // @ts-ignore
                    transition={({ height: { delay: 0, duration: 0.4 } },
                            { opacity: { delay: 0.5, duration: 0.4 } })
                    }
                    onLoad={imageLoaded}
                    width="100%"
                    src={src}
                    srcSet={srcSet}
                />
            </div>
        </div>
    );
}
