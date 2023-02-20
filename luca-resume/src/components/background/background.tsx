import React, { RefObject } from "react";
import "./background.scss";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type ResumeBackgroundProps = {
  pagesRef: RefObject<HTMLElement>[];
};

function useParallax(
  distance: number,
  offset = 0,
  target?: RefObject<HTMLElement>,
  scrollOptions?: Parameters<typeof useScroll>[0],
  springOptions?: Parameters<typeof useSpring>[1]
) {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
    ...scrollOptions,
  });

  const scaledProgess = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-distance, offset, distance]
  );

  return useSpring(scaledProgess, {
    stiffness: 100,
    restDelta: 0.001,
    ...springOptions,
  });
}

function ResumeBackground(props: ResumeBackgroundProps) {
  const { pagesRef } = props;
  const [homeRef, aboutRef] = pagesRef;

  const homeParallax = useParallax(-200, 100, homeRef);
  const aboutParallax = useParallax(-130, 80, aboutRef);
  const aboutParallax2 = useParallax(-130, 60, aboutRef);

  return (
    <svg className="bg-blur bg" viewBox="0 0 100 100">
      <motion.ellipse cx="50" cy={homeParallax} rx="120" ry="50" />
      <motion.ellipse cx="80" cy={aboutParallax} rx="10" ry="10" />
      <motion.ellipse cx="120" cy={aboutParallax2} rx="15" ry="15" />
    </svg>
  );
}

export default ResumeBackground;
