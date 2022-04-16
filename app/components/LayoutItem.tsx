import { motion } from "framer-motion";
import { FC } from "react";
import { ItemsAnimation } from "~/helpers/anamations";

const LayoutItem: FC = ({ children }) => {
  return <motion.div variants={ItemsAnimation}>{children}</motion.div>;
};

export default LayoutItem;
