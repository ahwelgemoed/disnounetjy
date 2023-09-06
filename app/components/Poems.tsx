import { Form } from "@remix-run/react";
import { FC } from "react";
import type { Poem } from "~/models/poems.server";
import { format } from "date-fns";
import LayoutItem from "./LayoutItem";
import PoemComponent from "./Poem";

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
      <PoemComponent poem={poem} />
    </div>
  );
};

export default Poems;
