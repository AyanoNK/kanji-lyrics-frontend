import HeroSongTest from './HeroSongTest';
import crossingField from './songs/crossingField';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full gap-16 px-8 md:px-0">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-8xl font-medium">鬼門</h1>
        <h2 className="text-4xl text-center">
          Practice Kanji through Japanese music!
        </h2>
      </div>
      <HeroSongTest song={crossingField} />
    </main>
  );
}
