
import React from 'react';
import './background.scss';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue
} from "framer-motion";


function useParallax(value: MotionValue<number>, distance: number, offset: number = 0) {
  return useTransform(value, [0, 1], [offset, distance]);
}

function ResumeBackground() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, -800, 100)
  const parrallax = useSpring(y, {
    stiffness: 100,
    restDelta: 0.001
  })
  return (
    <svg className='bg-blur bg' viewBox='0 0 100 100'>
      <motion.ellipse cx="50" cy={parrallax} rx="120" ry="50"/>
    </svg>
  )
}

export default ResumeBackground;