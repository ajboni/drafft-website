import Layout from "@theme/Layout";
import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function MediaGallery() {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const importAll = (r) => r.keys().map((key) => ({ src: r(key).default }));

    const scriptImages = importAll(require.context("@site/static/img/scripts/", false, /\.(png|webp)$/));
    const gddImages = importAll(require.context("@site/static/img/gdd/", false, /\.(png|webp)$/));
    const dialogueTreeImages = importAll(
      require.context("@site/static/img/dialogue-tree-editor/", false, /\.(png|webp)$/)
    );
    const engineAgnosticImages = importAll(
      require.context("@site/static/img/engine-agnostic/", false, /\.(png|webp)$/)
    );
    const privacyImages = importAll(require.context("@site/static/img/privacy/", false, /\.(png|webp)$/));
    const otherImages = importAll(require.context("@site/static/img/gallery/", false, /\.(png|webp)$/));

    setPhotos([
      ...scriptImages,
      ...gddImages,
      ...dialogueTreeImages,
      ...otherImages,
      ...engineAgnosticImages,
      ...privacyImages,
    ]);
  }, []);

  return (
    <Layout title={`Gallery`}>
      <div className="p-2 lg:p-8">
        <Carousel showThumbs={false} emulateTouch={true} className="max-w-5xl mx-auto">
          {photos.map((photo, idx) => (
            <div onClick={() => setIndex(idx)} className="cursor-pointer" key={photo.src}>
              <img src={photo.src} alt={`Gallery image ${idx + 1}`} />
            </div>
          ))}
        </Carousel>
        <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={photos} />
      </div>
    </Layout>
  );
}

export default MediaGallery;
