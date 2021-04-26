export const fadeUpIn = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  }
}

export const fadeUpOut = {
  exit: {
    opacity: 0,
    transform: "translateY(-25px)"
  }
}

export const fadeDownIn = {
  hidden: {
    opacity: 0,
    transform: "translateY(-25px)"
  },
  visible: {
    opacity: 1,
    transform: "translateY(0px)"
  }
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}