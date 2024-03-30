'use client';

import { useEffect, useRef, useState } from 'react';
import YouTubePlayer from 'react-player/youtube';
import ReactPlayer, { YouTubeConfig } from 'react-player/youtube';
import youTubeConfig from './config/youtube';

interface HeroSongTestProps {
  player: React.RefObject<YouTubePlayer>;
  youtubeID: string;
  start: number;
  end: number;
}

export default function YouTubePlayerWrapper({
  player,
  youtubeID,
  start,
  end,
}: HeroSongTestProps) {
  const songYouTubeConfig = youTubeConfig({ start, end });
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const handleOnEnded = () => {
    player.current?.seekTo(45, 'seconds');
  };

  const handleOnProgress = (progress: { played: number }) => {
    console.log(progress);
  };

  return (
    <>
      {hasWindow && (
        <ReactPlayer
          className="top-0 left-0"
          ref={player}
          onProgress={handleOnProgress}
          onEnded={handleOnEnded}
          config={songYouTubeConfig}
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${youtubeID}`}
          playing={playing}
        />
      )}
    </>
  );
}
