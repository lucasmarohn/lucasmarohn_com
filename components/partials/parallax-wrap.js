import { Box } from "@chakra-ui/react";
import { useState, useLayoutEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";

const MotionBox = motion(Box);

export default function ParallaxWrap({ children }) {
  const controls = useAnimation();

  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [elementTop, elementTop + 1], [100, -100], {
    clamp: true,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return <MotionBox w="100%" ref={ref} style={{ y }}>{children}</MotionBox>;
}
