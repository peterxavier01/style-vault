export const heroTitleVariants = {
  initial: {
    y: 200,
    opacity: 0,
    duration: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const heroSubtitleVariants = {
  initial: {
    y: -200,
    opacity: 0,
    duration: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const heroBtnVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
