import { Link } from "@remix-run/react";
import { FC } from "react";
import { sanitizePoet } from "~/helpers/utlis";
type PoetsType = {
  poets: string[];
};

const Poets: FC<PoetsType> = ({ poets }) => {
  return (
    <>
      <div className="poets-components">
        {poets.map((poet) => {
          const cleanHandle = sanitizePoet(poet);
          return (
            <div key={poet} className="poet">
              <b>{cleanHandle}</b>
              <br />
              <a
                className="poet-link"
                target="_blank"
                href={`https://www.instagram.com/${cleanHandle}/`}
              >
                Instagram
              </a>
              <br />
              <Link className="poet-link" to={`/woorde/${cleanHandle}`}>
                Woorde
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poets;
