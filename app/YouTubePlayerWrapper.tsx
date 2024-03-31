'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import YouTubePlayer from 'react-player/youtube';
import youTubeConfig from './config/youtube';
import { OnProgressProps } from 'react-player/base';

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
  const [playing, setPlaying] = useState<boolean>(false);
  const [playCount, setPlayCount] = useState<number>(0);
  const [showsButton, setShowsButton] = useState<boolean>(true);
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (playing === true) {
      setPlaying(false);
    }
  }, [playing]);

  const handleVideoPlaying = () => {
    setPlaying(true);
  };

  const handleOnPlay = () => {
    setShowsButton((prevState) => !prevState);
  };

  const handleOnPause = () => setShowsButton(true);

  const handleOnEnded = () => {
    setPlayCount((prevState) => prevState + 1);
    player.current?.seekTo(start, 'seconds');
  };

  return (
    <>
      {hasWindow && (
        <div className="h-full w-full flex relative">
          <YouTubePlayer
            className=""
            ref={player}
            onPlay={handleOnPlay}
            onPause={handleOnPause}
            onEnded={handleOnEnded}
            config={songYouTubeConfig}
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${youtubeID}`}
            playing={playing}
          />
          <span className="absolute top-2 right-2 bg-zinc-100 rounded px-2 text-xs">
            Tries: {playCount}
          </span>
          <button
            className="absolute h-full w-full flex items-center justify-center"
            onClick={handleVideoPlaying}
          >
            {showsButton && (
              <span className="absolute bg-zinc-100 p-4 rounded">
                {playCount > 0 ? 'Listen again' : 'Start listening'}
              </span>
            )}
          </button>
        </div>
      )}
    </>
  );
}
