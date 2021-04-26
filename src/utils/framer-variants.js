export const stagger = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const staggerLong = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

export const fadeUpIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

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