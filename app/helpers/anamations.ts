export const ContainerAnimation = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};
export const ItemsAnimation = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 5 },
};
