import { YouTubeConfig } from 'react-player/youtube';

interface YouTubeConfigProps {
  start: number;
  end: number;
}

const youTubeConfig = ({ start, end }: YouTubeConfigProps) => {
  return {
    youtube: {
      playerVars: {
        start,
        end,
        controls: 0,
        loop: 1,
      },
    },
  } as YouTubeConfig;
};
export default youTubeConfig;
