import React, { useState, useEffect } from "react";
import { getJSON } from "jquery";
import moment from "moment";

import Head from "../components/head";
import Layout from "../components/layout";

const mapSpreadsheetDataToItems = spreadsheetData =>
  spreadsheetData.feed.entry.map(entryItem => {
    const gsxKeys = Object.keys(entryItem).filter(key => key.includes("gsx$"));

    return gsxKeys.reduce((items, gsxKey) => {
      items[gsxKey.replace("gsx$", "")] = entryItem[gsxKey].$t;
      return items;
    }, {});
  });

export default () => {
  const [mediaItems, setMediaItems] = useState([]);

  const fetchMediaItems = async () => {
    const spreadsheetId = "1iOliJOKefnIxrlmMkvmgspcdcQ4aR0fWwQhI-IC-1AU";

    const data = await getJSON(
      `http://spreadsheets.google.com/feeds/list/${spreadsheetId}/od6/public/values?alt=json`
    );

    return setMediaItems(mapSpreadsheetDataToItems(data));
  };

  useEffect(() => {
    fetchMediaItems();
  }, []);

  return (
    <Layout>
      <Head
        title="Media"
        description="Interviews, book talks, and more with Scott Shane, national security reporter for The New York Times and author of Objective Troy."
      />

      <h1 className="primary-header">
        Media for <span className="book-title">Objective Troy</span>
      </h1>

      <div>
        {mediaItems.map(mediaItem => (
          <section className="media-item" key={mediaItem.title}>
            <h2>
              <a href={mediaItem.link} target="_blank">
                {mediaItem.title}
              </a>
            </h2>

            <p className="media-item-publication-date">
              {moment(mediaItem.date, "MM-DD-YYYY").format("MMMM D, YYYY")}
            </p>

            {mediaItem.description && (
              <div>
                {/* todo: output html? */}
                {mediaItem.description}
              </div>
            )}
          </section>
        ))}
      </div>
    </Layout>
  );
};
