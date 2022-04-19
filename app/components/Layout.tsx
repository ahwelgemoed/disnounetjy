import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { ContainerAnimation } from "~/helpers/anamations";

const Layout: FC = ({ children }) => {
  return (
    <div className="main-container">
      <Link to="/">
        <img src={"./dnnj.svg"} className="d-logo" />
      </Link>

      <div className="container">
        <div className="button-container-header">
          <button className="button">
            <Link to="/lastegedig">ons laste gedig</Link>
          </button>
          <button className="button">
            <Link to="/diedigters">die digters</Link>
          </button>
          <button className="button">
            <a target="_blank" href="https://klyntji.com/">
              klyntji
            </a>
          </button>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ContainerAnimation}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;
