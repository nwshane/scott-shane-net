import React from "react";
import Head from "../components/head";

export default class MediaPage extends React.Component {
  render() {
    const mediaItems = [
      {
        title: "bla",
        link: "https://google.com",
        publication_date: new Date(2018, 1, 3),
        description: "hi there"
      }
    ];
    return (
      <div>
        <Head
          title="Media"
          description="Interviews, book talks, and more with Scott Shane, national security reporter for The New York Times and author of Objective Troy."
        />

        <h1 class="primary-header">
          Media for <span class="book-title">Objective Troy</span>
        </h1>

        <div>
          {mediaItems.map(mediaItem => (
            <section class="media-item">
              <h2>
                <a href={mediaItem.link} target="_blank">
                  {mediaItem.title}
                </a>
              </h2>

              <p class="media-item-publication-date">
                {mediaItem.publication_date.getFullYear()}
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
      </div>
    );
  }
}
