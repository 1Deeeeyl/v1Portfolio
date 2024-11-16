import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Blob = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  },[mouseX, mouseY]);

  return (
    <>
      <div className="fixed w-full h-full  top-0 left-0 z-[-1] backdrop-blur-lg "></div>

      <motion.div
        className="fixed w-[300px] h-[300px] bg-[#25DBFF] blur-[300px] rounded-full pointer-events-none z-[-2] "
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />
    </>
  );
};

export default Blob;
