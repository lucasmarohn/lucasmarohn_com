import { Box } from "@chakra-ui/react";
import { fadeUpIn } from "../../src/utils/framer-variants";
import { motion, useAnimation } from 'framer-motion'
import VisibilitySensor from "react-visibility-sensor";

const MotionBox = motion(Box)

export default function SectionWrap({ bg = null, my, py, delay = 0, noAnimation = false, children }) {
  const controls = useAnimation()
  if(noAnimation) {
    return (
      <MotionBox
            my={my || !bg && [50, 75, 150]}
            py={py || bg && [50, 75, 150]}
            w="100%"
            as="section"
            bg={bg}
          >
          {children}
        </MotionBox>
    )
  }
  return (
    <VisibilitySensor partialVisibility={true}> 
    {({isVisible}) => {
      if(isVisible) {
        controls.start('visible')
      }
      return (
        <MotionBox
            my={my || !bg && [50, 75, 150]}
            py={py || bg && [50, 75, 150]}
            w="100%"
            as="section"
            initial="hidden"
            animate={controls}
            variants={fadeUpIn}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.25, delay: .2 * delay }}
            bg={bg}
          >
          {children}
        </MotionBox>
      )
    }}
    </VisibilitySensor>
  )
}
