type Song = {
  youTubeID: string;
  breakpoints: SongBreakpoint[];
};

type SongBreakpoint = {
  start: number;
  end: number;
  options: string[];
  answer: string;
};
