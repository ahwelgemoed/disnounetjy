import { format } from "date-fns";
import type { Poem } from "~/models/poems.server";
import LayoutItem from "./LayoutItem";

type PoemType = {
  poem: Poem;
};

const PoemComponent = ({ poem }: PoemType) => {
  return (
    <LayoutItem>
      <div className="poem-container">
        <h4 className="poem-title">
          {poem.title ? poem.title : "ongetieteld"}
        </h4>
        <h5 className="poem-handle">
          deur: {poem.handle ? poem.handle : "anoniem"}
        </h5>
        <div className="poem-body">{poem.bodyText}</div>
        <p className="poem-date">{format(new Date(poem.date), "dd-MM-yyyy")}</p>
      </div>
    </LayoutItem>
  );
};

export default PoemComponent;
