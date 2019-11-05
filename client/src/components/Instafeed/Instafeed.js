import React, { useEffect, useState, useRef, useContext } from "react";
import { TweenLite as Tween, Power3, ScrollToPlugin } from "gsap/all";
// import ScrollToPlugin from "gsap/umd/ScrollToPlugin";
// import LazyLoad from "react-lazyload";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";
// import ReactImageAppear from "react-image-appear";
import { ArrowIcon } from "../Icons/Icons";
import Context from 'context';
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
        return photos;
      })
      .catch(err => {
        console.warn(`\nCould not fetch instagram posts. Error status ${err}`);
        return null;
      })
  );
};

const scrollOnClick = (target, amount, scrollRight) => {
  Tween.to(target, 0.65, {
    scrollTo: { x: scrollRight ? `-=${amount}` : `+=${amount}`, autoKill: true },
    ease: Power3.easeOut
  });
};

const Instafeed = ({ scrollPosition }) => {
  const isDesktop = useContext(Context);

  const [feed, setFeed] = useState([]);
  const [scrollAmount, setScrollAmount] = useState(null);
  const [error, setError] = useState(false);
  const innerRef = useRef(false);

  useEffect(() => {
    if(isDesktop) setScrollAmount('580')
    else setScrollAmount(window.innerWidth * 0.7)

    return () => null
    // eslint-disable-next-line
  }, [isDesktop, scrollAmount, window.innerWidth])

  useEffect(() => {
    getFeeds("noerhave_frisoer")
    .then(res => setFeed(res))
    .catch(err => setError(err));

    return () => null;
  }, []);

  return (
    <section className="instafeed">
      <div className="instafeed-inner" ref={innerRef}>
        {feed && !error &&
          feed.length > 0 &&
          feed.map((feed, i) => (
            <figure key={`instafeed-${i}`}>
              <LazyLoadImage
                src={feed.thumbnail_resources[2].src}
                scrollPosition={scrollPosition}
                threshold={1000}
                // onLoad={(e) => {
                //   Tween.fromTo(e.currentTarget, 0.75, {
                //     opacity: 0,
                //   },
                //   {
                //     opacity: 1,
                //   })
                // }}
                alt={
                  feed.edge_media_to_caption.edges.length > 0
                    ? feed.edge_media_to_caption.edges[0].node.text
                    : "NØRHAVE-frisør_instagram-kunde-billede-fra-NØRHAVE-frisør-salon-i-Randers"
                }
              />
            </figure>
          ))
        }
      </div>
      {!error && (
        <>
          <button
            className="arrow-left"
            onClick={() => scrollOnClick(innerRef.current, scrollAmount, true)}
          >
            <ArrowIcon />
          </button>
          <button
            className="arrow-right"
            onClick={() => scrollOnClick(innerRef.current, scrollAmount, false)}
          >
            <ArrowIcon />
          </button>
        </>
      )}
    </section>
  );
};
export default trackWindowScroll(Instafeed);