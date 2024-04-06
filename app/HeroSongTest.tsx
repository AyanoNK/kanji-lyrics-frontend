'use client';

import dynamic from 'next/dynamic';
import { useCallback, useRef, useState } from 'react';
import YouTubePlayer from 'react-player/youtube';
import HeroOption from './components/HeroOption';
import Loading from './components/Loading';

interface HeroSongTestProps {
  song: Song;
}

const DynamicYouTubePlayerWrapper = dynamic(
  () => import('./YouTubePlayerWrapper'),
  {
    loading: () => <Loading />,
  },
);

export default function HeroSongTest({ song }: HeroSongTestProps) {
  const player = useRef<YouTubePlayer>(null);
  const firstBreakpoint = song.breakpoints[0];
  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div className="col-span-5 text-left w-full">
        <h3 className="text-2xl">Try to select the correct kanji</h3>
        <h4 className="text-lg">
          Listen to the song and select which kanji is being used.
        </h4>
      </div>
      <div className="col-span-5 md:col-span-3 flex flex-col gap-4 align-center justify-center items-center">
        <div className="h-full w-full flex items-center justify-center relative">
          <DynamicYouTubePlayerWrapper
            player={player}
            youtubeID={song.youTubeID}
            start={firstBreakpoint.start}
            end={firstBreakpoint.end}
          />
        </div>
        <span className="text-xl text-center">夢で ____ 飛んだ</span>
      </div>
      <div className="col-span-5 md:col-span-2 flex flex-col gap-4">
        {firstBreakpoint.options.map((option: string, index: number) => (
          <HeroOption key={`option-${index}`} value={option} />
        ))}
      </div>
    </div>
  );
}
