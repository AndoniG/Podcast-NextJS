import React from "react";
import Link from "next/link";
import { formatTitle } from "../utils/strings";

export const PodcastGrid = ({ audioClips, setSelectedPodcast }) => {
  return (
    <React.Fragment>
      <h2>Podcasts</h2>
      {audioClips.map((clip) => (
        <Link
          href={`/podcast?id=${clip.id}`}
          as={`/podcast?title=${formatTitle(clip.title)}&&id=${clip.id}`}
          key={clip.id}
        >
          <a
            className="podcast"
            onClick={(event) => setSelectedPodcast(event, clip)}
          >
            <h3>{clip.title}</h3>
            <div className="meta">{Math.ceil(clip.duration / 60)} minutes</div>
          </a>
        </Link>
      ))}
      <style jsx>{`
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}</style>
    </React.Fragment>
  );
};
