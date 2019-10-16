// import React from "react";

import axios from "axios";

export const fetchInstafeed = async setResponse => {
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

    // Retrieve only the first 3 results
    const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
      0,
      3
    );

    for (let media of mediaArray) {
      const node = media.node;
      // console.log('', node)
      // Process only if
      // if (node.__typename && node.__typename !== ("GraphImage")) {
      //   continue;
      // }
      const findCaption = (edges) => {
        if (edges.length === 0) return "";
        else return edges[0].node.text;
      }
// node.edge_media_to_caption.edges[0].node.text;
      let obj = {
        id: node.id,
        thumbnail: node.thumbnail_src,
        image: node.display_url,
        caption: findCaption(node.edge_media_to_caption.edges)
      };
      // Push the thumbnail src in the array
      res.push(obj);
    }
  } catch (err) {
    console.error("Unable to retrieve photos. Reason: " + err.toString());
  }
  setResponse(res);
};
