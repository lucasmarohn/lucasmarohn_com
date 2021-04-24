import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fadeUpIn } from "../../src/utils/framer-variants";
import { motion, useAnimation } from 'framer-motion'
import VisibilitySensor from "react-visibility-sensor";

const MotionBox = motion(Box)

export default function SectionWrap({ bg = null, delay = 0, children }) {
  const controls = useAnimation()
  return (
    <VisibilitySensor partialVisibility={true}> 
    {({isVisible}) => {
      if(isVisible) {
        controls.start('visible')
      }
      return (
        <MotionBox
            my={!bg && [50, 75, 150]}
            py={bg && [50, 75, 150]}
            w="100%"
            as="section"
            initial="hidden"
            animate={controls}
            variants={fadeUpIn}
            transition={{ ease: "easeOut", duration: 0.5, delay: .2 * delay }}
            bg={bg}
          >
          {children}
        </MotionBox>
      )
    }}
    </VisibilitySensor>
  )
}
