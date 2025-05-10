import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function Counter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, []);

  return (
    <motion.span className="text-limicMist font-light text-sm sm:text-base md:text-lg lg:text-xl font-Syncopate tracking-tighter inline-block min-w-[2.5rem] text-center">
      {rounded}
    </motion.span>
  );
}
