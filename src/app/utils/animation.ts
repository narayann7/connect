// Animation configuration and variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

// Transition configurations
export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20
};

export const smoothTransition = {
  duration: 0.3,
  ease: "easeOut"
};

export const fastTransition = {
  duration: 0.2,
  ease: "easeOut"
};

export const slowTransition = {
  duration: 0.6,
  ease: "easeOut"
};

// Hover animations
export const hoverScale = {
  scale: 1.02,
  transition: fastTransition
};

export const hoverScaleSmall = {
  scale: 1.05,
  transition: fastTransition
};

export const tapScale = {
  scale: 0.98
};

export const tapScaleSmall = {
  scale: 0.95
};

// Continuous animations
export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const rotateAnimation = {
  rotate: 360,
  transition: {
    duration: 60,
    repeat: Infinity,
    ease: "linear"
  }
};