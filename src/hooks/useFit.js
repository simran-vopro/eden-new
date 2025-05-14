import { useEffect } from "react";

const useFitText = (textRef, containerRef, max = 100, min = 10, step = 0.1, overshoot = 1) => {
    useEffect(() => {
        const resizeText = () => {
            const textEl = textRef.current;
            const containerEl = containerRef.current;
            if (!textEl || !containerEl) return;

            let fontSize = min;
            textEl.style.fontSize = fontSize + "px";

            // Grow text until it slightly overflows container by `overshoot` pixels
            while (
                textEl.scrollWidth <= containerEl.clientWidth + overshoot &&
                fontSize <= max
            ) {
                fontSize += step;
                textEl.style.fontSize = fontSize + "px";
            }
        };

        resizeText();
        window.addEventListener("resize", resizeText);
        return () => window.removeEventListener("resize", resizeText);
    }, [textRef, containerRef, max, min, step, overshoot]);
};

export default useFitText;
