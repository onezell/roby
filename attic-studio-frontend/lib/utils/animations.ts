/**
 * Returns animation props for scroll animations that are disabled on mobile
 * to prevent flash/jank issues
 */
export function getScrollAnimationProps(isMobile: boolean, delay = 0) {
  if (isMobile) {
    return {
      initial: { opacity: 1 },
    }
  }

  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  }
}

/**
 * Returns animation props with scale for scroll animations
 */
export function getScrollAnimationWithScaleProps(isMobile: boolean, delay = 0) {
  if (isMobile) {
    return {
      initial: { opacity: 1, scale: 1 },
    }
  }

  return {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  }
}
