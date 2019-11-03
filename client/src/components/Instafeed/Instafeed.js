import React, { useEffect, useState, useRef } from "react";
import { TweenLite as Tween, Power1, ScrollToPlugin } from "gsap/all";
// import ScrollToPlugin from "gsap/umd/ScrollToPlugin";
// import LazyLoad from "react-lazyload";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";
import { ArrowIcon } from "../Icons/Icons";
import Loading from '../Loading/Loading';
import './Instafeed.scss';
import axios from "axios";
import cheerio from "cheerio";
// eslint-disable-next-line
const scrollPlugin = ScrollToPlugin;

const parseResponse = response => {
  const $ = cheerio.load(response.data);
  const scripts = $(`html > body > script`);

  let id = 0;

  if (scripts.get(0).attribs.type === `application/ld+json`) {
    id = 1;
  }

  const jsonData = $(`html > body > script`)
    .get(id)
    .children[0].data.replace(/window\._sharedData\s?=\s?{/, `{`)
    .replace(/;$/g, ``);
  return JSON.parse(jsonData).entry_data;
};

const getFeeds = username => {
  return (
    axios
      .get(`https://www.instagram.com/${username}/`)
      .then(response => {
        const data = parseResponse(response);
        const photos = [];
        data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.forEach(
          edge => {
            if (edge.node) {
              photos.push(edge.node);
            }
          }
        );
        console.log('', photos)
        return photos;
      })
      .catch(err => {
        console.warn(`\nCould not fetch instagram posts. Error status ${err}`);
        return null;
      })
  );
};

//TODO find antal billeder og længden af container
//dividere det ud, så scroll passer
const scrollOnClick = (target, scrollRight) => {
  Tween.to(target, 0.75, {
    scrollTo: { x: scrollRight ? "-=590" : "+=590", autoKill: true },
    ease: Power1.easeOut
  });
};

const MyImage = ({ image }) => (
  <LazyLoadImage
    alt={image.alt}
    height={image.height}
    src={image.src} // use normal <img> attributes as props
    width={image.width}
  />
);

const Instafeed = ({ scrollPosition }) => {
  const [feed, setFeed] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const innerRef = useRef(false);

  useEffect(() => {
    getFeeds("noerhave_frisoer")
      // .then(res => sortIt(res, "id", "desc"))
      .then(res => {
        setFeed(res);
      })
      .catch(err => setError(err));

    return () => null;
  }, []);

  console.log("feed: ", feed);
  return (
    <section className="instafeed">
      <div className="instafeed-inner" ref={innerRef}>
        {/* {error && <div className="error">{error}</div>} */}
        {feed &&
          feed.length > 0 &&
          feed.map((feed, i) => (
            // <LazyLoad
            //   key={`instafeed-${i}`}
            //   height={290}
            //   width={290}
            //   overflow={true}
            //   once
            // >
            <figure key={`instafeed-${i}`}>
              <LazyLoadImage
                src={feed.thumbnail_resources[2].src}
                // height={image.height}
                // width={image.width}
                // placeholder={<Loading size="10px" />}
                scrollPosition={scrollPosition}
                alt={
                  feed.edge_media_to_caption.edges.length > 0
                    ? feed.edge_media_to_caption.edges[0].node.text
                    : "NØRHAVE-frisør_instagram-kunde-billede-fra-NØRHAVE-frisør-salon-i-Randers"
                }
              />
              {/* <img
                src={feed.thumbnail_resources[2].src}
                alt={
                  feed.edge_media_to_caption.edges.length > 0
                    ? feed.edge_media_to_caption.edges[0].node.text
                    : "NØRHAVE-frisør_instagram-kunde-billede-fra-NØRHAVE-frisør-salon-i-Randers"
                }
              /> */}
            </figure>
            // </LazyLoad>
          ))}
        {!error && (
          <>
            <button
              className="arrow-left"
              onClick={() => scrollOnClick(innerRef.current, true)}
            >
              <ArrowIcon />
            </button>
            <button
              className="arrow-right"
              onClick={() => scrollOnClick(innerRef.current, false)}
            >
              <ArrowIcon />
            </button>
          </>
        )}
      </div>
    </section>
  );
};
export default trackWindowScroll(Instafeed);

// export default Instafeed;
