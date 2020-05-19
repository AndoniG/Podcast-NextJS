import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { PodcastGrid } from "../components/PodcastGrid";
import { SeriesGrid } from "../components/SeriesGrid";
import { PodcastPlayer } from "../components/PodcastPlayer";
import Error from "./_error";

export async function getServerSideProps({ query, res }) {
  try {
    let channelId = query.id;
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${channelId}`),
      fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`),
    ]);

    const channelErrorCode = reqChannel.ok ? false : reqChannel.status;
    const seriesErrorCode = reqSeries.ok ? false : reqSeries.status;
    const audiosErrorCode = reqAudios.ok ? false : reqAudios.status;

    const statusCode =
      channelErrorCode !== false
        ? channelErrorCode
        : seriesErrorCode !== false
        ? seriesErrorCode
        : audiosErrorCode;

    if (statusCode) {
      return {
        props: { channel: null, audioClips: null, series: null, statusCode },
      };
    }

    let channel = (await reqChannel.json()).body.channel;
    let audioClips = (await reqAudios.json()).body.audio_clips;
    let series = (await reqSeries.json()).body.channels;

    return { props: { channel, audioClips, series, statusCode } };
  } catch (e) {
    res.statusCode = e.status || 503;
    console.log("catch");
    return {
      props: { channel: null, audioClips: null, series: null, statusCode: 503 },
    };
  }
}

export default ({ channel, audioClips, series, statusCode }) => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const handleSetSelectedPost = (event, podcast) => {
    event.preventDefault();
    console.log(podcast);
    setSelectedPodcast(podcast);
  };

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title={`${channel.title}`}>
      {selectedPodcast && (
        <div className="modal">
          <PodcastPlayer clip={selectedPodcast} onClose={setSelectedPodcast} />
        </div>
      )}

      {series.length > 0 && <SeriesGrid series={series} />}
      {audioClips.length > 0 && (
        <PodcastGrid
          audioClips={audioClips}
          setSelectedPodcast={handleSetSelectedPost}
        />
      )}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>
    </Layout>
  );
};
