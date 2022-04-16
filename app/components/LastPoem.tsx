import { marked } from "marked";
import { images, lastPoem } from "~/helpers/lastPoem";

import ImageGallery from "react-image-gallery";

const LastPoem = () => {
  return (
    <div className="poem-container">
      <div dangerouslySetInnerHTML={{ __html: marked(lastPoem) }} />
      <ImageGallery
        items={images}
        infinite={true}
        autoPlay={true}
        showNav={false}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default LastPoem;
