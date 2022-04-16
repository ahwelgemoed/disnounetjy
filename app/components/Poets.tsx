import { motion } from "framer-motion";
import { FC, useState } from "react";
type PoetsType = {
  poets: string[];
};

const Poets: FC<PoetsType> = ({ poets }) => {
  return (
    <>
      <div className="poets-components">
        {poets.map((poet) => {
          const sanity = poet.replace("@", "").replace(" ", "");
          return (
            <div key={poet} className="poet">
              <a
                className="poet-link"
                target="_blank"
                href={`https://www.instagram.com/${sanity}/`}
              >
                {sanity}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poets;
