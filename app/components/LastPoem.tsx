import { marked } from "marked";
import { lastPoem } from "~/helpers/lastPoem";

const LastPoem = () => {
  return (
    <div className="poem-container">
      <div dangerouslySetInnerHTML={{ __html: marked(lastPoem) }} />
    </div>
  );
};

export default LastPoem;
