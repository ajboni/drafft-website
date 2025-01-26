import Layout from "@theme/Layout";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const importAll = (r) => r.keys().map((key) => ({ src: r(key).default }));

const scriptImages = importAll(require.context("@site/static/img/scripts/", false, /\.png$/));
const gddImages = importAll(require.context("@site/static/img/gdd/", false, /\.png$/));
const dialogueTreeImages = importAll(require.context("@site/static/img/dialogue-tree-editor/", false, /\.png$/));

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const photos = [...scriptImages, ...gddImages, ...dialogueTreeImages];

function MediaGallery() {
  const [index, setIndex] = useState(-1);
  return (
    <Layout>
      <div className="p2 lg:p-8">
        <Carousel showThumbs={false} emulateTouch={true} labels={false} className="max-w-5xl mx-auto">
          {photos.map((photo, index) => (
            <div onClick={() => setIndex(index)} className="cursor-pointer" key={index}>
              <img src={photo.src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={photos} />
      </div>
    </Layout>
  );
}

export default MediaGallery;
