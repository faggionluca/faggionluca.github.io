
import React, { RefObject } from 'react';
import './background.scss';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue
} from "framer-motion";

type ResumeBackgroundProps = {
  pagesRef: RefObject<HTMLElement>[]
}

function useParallax(distance: number, offset: number = 0, target?: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({target: target, offset: ["end start", "end end"]});
  const scaledProgess = useTransform(scrollYProgress, [0, 1], [distance, offset]);
  return useSpring(scaledProgess, {
    stiffness: 100,
    restDelta: 0.001
  })
}

function ResumeBackground(props: ResumeBackgroundProps) {
  const { pagesRef } = props
  const [homeRef] = pagesRef
  
  const homeParallax = useParallax(-200, 100, homeRef);

  return (
    <svg className='bg-blur bg' viewBox='0 0 100 100'>
      <motion.ellipse cx="50" cy={homeParallax} rx="120" ry="50"/>
    </svg>
  )
}

export default ResumeBackground;