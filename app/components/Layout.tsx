import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { ContainerAnimation } from "~/helpers/anamations";
import logo from "~/images/dnnj.svg";

const Layout: FC = ({ children }) => {
  return (
    <div className="main-container">
      <div className="container">
        <Link to="/">
          <img src={logo} className="d-logo" alt="DNJ Logo" />
        </Link>

        <div className="container-body">
          <div className="button-container-header">
            <button className="button">
              <Link to="/laaste-gedig">ons laaste gedig</Link>
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
          <section>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ContainerAnimation}
            >
              {children}
            </motion.div>
          </section>
        </div>
      </div>

      <footer className="footer">
        &copy; Copyright {new Date().getFullYear()} deur{" "}
        <a target="_blank" href="https://www.welgemoed.io">
          Arno.H Welgemoed
        </a>
      </footer>
    </div>
  );
};

export default Layout;
