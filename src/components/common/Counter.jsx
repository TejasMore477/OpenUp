import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function HTMLContent() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 100, { duration: 2 })
        return () => controls.stop()
    }, []);

    return <motion.pre className="text-limicMist font-light text-[1.3vw] font-Syncopate tracking-tighter w-[40px]">{rounded}</motion.pre>
};
