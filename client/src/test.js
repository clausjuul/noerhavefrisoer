import React, { useEffect, useState } from "react";
import axios from "axios";

// insta som slide sideværs galleri på mobil
// desktop exspand nedad, 3 pr row?

const fetchInstaFeed = async setImages => {
  const res = [];

  try {
    const userInfoSource = await axios.get(
      "https://www.instagram.com/noerhave_frisoer/"
    );

    // userInfoSource.data contains the HTML from Axios
    const jsonObject = userInfoSource.data
      .match(
        /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
      )[1]
      .slice(0, -1);
    const userInfo = JSON.parse(jsonObject);

    // Retrieve only the first 10 results
    const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
      0,
      3
    );
    for (let media of mediaArray) {
      const node = media.node;

      // Process only if is an image
      // if (node.__typename && node.__typename !== ("GraphImage")) {
      //   continue;
      // }

      // thumbnail_resources[4].src
      // Push the thumbnail src in the array
      res.push(node.thumbnail_resources[4].src);
    }
  } catch (e) {
    console.error("Unable to retrieve photos. Reason: " + e.toString());
  }
  setImages(res);
};


const Test = () => {

  const [images, setImages] = useState(null)
  useEffect(() => {
    fetchInstaFeed(setImages);
    }, [])

  return (
    <>
      <section className="test">

        {images && images.map(image => (
          <img src={image} alt="feed" />
        ))}

      </section>
    </>
  );
};
export default Test;
