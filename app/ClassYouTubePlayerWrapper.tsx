import { Component } from 'react';
import YouTubePlayer from 'react-player/youtube';
import youTubeConfig from './config/youtube';

interface ClassYouTubePlayerWrapperProps {
  youtubeID: string;
  start: number;
  end: number;
}
interface ClassYouTubePlayerWrapperState {
  playing: boolean;
  hasWindow: boolean;
  showsButton: boolean;
}

class ClassYouTubePlayerWrapper extends Component<ClassYouTubePlayerWrapperProps> {
  props = {
    youtubeID: '',
    start: 0,
    end: 0,
  };

  state: ClassYouTubePlayerWrapperState = {
    playing: false,
    hasWindow: false,
    showsButton: true,
  };

  player: YouTubePlayer | null = null;

  // when window is different from undefined, set hasWindow to true
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ hasWindow: true });
    }
  }

  componentDidUpdate(
    prevProps: Readonly<ClassYouTubePlayerWrapperProps>,
    prevState: Readonly<ClassYouTubePlayerWrapperState>,
    snapshot?: any,
  ): void {
    console.log('componentDidUpdate');
    if (prevState.playing === true) {
      this.setState({ playing: false });
    }
  }

  handleVideoPlaying = () => {
    this.setState({ playing: true, showsButton: false });
  };

  handleOnEnded = () => {
    console.log('onEnded');

    this.player?.seekTo(this.props.start);
  };

  ref = (player: YouTubePlayer) => {
    this.player = player;
  };

  render() {
    const { playing, showsButton, hasWindow } = this.state;
    const { youtubeID, start, end } = this.props;
    const songYouTubeConfig = youTubeConfig({ start, end });

    return (
      <>
        {hasWindow && (
          <div className="h-full w-full flex relative">
            <YouTubePlayer
              ref={this.ref}
              className=""
              width="100%"
              height="100%"
              config={songYouTubeConfig}
              onEnded={this.handleOnEnded}
              url={`https://www.youtube.com/watch?v=${youtubeID}`}
              playing={playing}
            />
            <button
              className="absolute h-full w-full flex items-center justify-center"
              onClick={this.handleVideoPlaying}
            >
              {showsButton && (
                <span className="absolute bg-zinc-100 p-4 rounded">Play</span>
              )}
            </button>
          </div>
        )}
      </>
    );
  }
}

export default ClassYouTubePlayerWrapper;
