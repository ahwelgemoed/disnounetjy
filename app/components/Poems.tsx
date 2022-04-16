import { Form } from "@remix-run/react";
import { FC } from "react";
import { Poem } from "~/models/poems.server";
import { format } from "date-fns";
import LayoutItem from "./LayoutItem";

type PoemType = {
  poem: Poem;
};

const Poems: FC<PoemType> = ({ poem }) => {
  return (
    <div>
      <LayoutItem>
        <div className="button-container">
          <h5>'n gedig uit ons argief</h5>
          <Form method="get">
            <button className="button" type="submit">
              nog 'n gedig?
            </button>
          </Form>
        </div>
      </LayoutItem>
      <LayoutItem>
        <div className="poem-container">
          <h4 className="poem-title">
            {poem.title ? poem.title : "ongetieteld"}
          </h4>
          <h5 className="poem-handle">
            deur: {poem.handle ? poem.handle : "anoniem"}
          </h5>
          {/* <div dangerouslySetInnerHTML={{ __html: poem.bodyText }} /> */}
          <div className="poem-body">{poem.bodyText}</div>
          <p className="poem-date">
            {format(new Date(poem.date), "dd-MM-yyyy")}
          </p>
        </div>
      </LayoutItem>
    </div>
  );
};

export default Poems;
