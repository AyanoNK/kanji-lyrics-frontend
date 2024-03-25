import Image from 'next/image';
import HeroOption from './components/HeroOption';

export default function Home() {
  const options: string[] = ['多角', '高く', '他覚', '多覚'];

  return (
    <main className="flex flex-col items-center justify-between w-full gap-16 px-8 md:px-0">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-8xl font-medium">鬼門</h1>
        <h2 className="text-4xl text-center">
          Practice Kanji through Japanese music!
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-4 w-full">
        <div className="col-span-5 text-left w-full">
          <h3 className="text-2xl">Try to select the correct kanji</h3>
          <h4 className="text-lg">
            Listen to the song and select which kanji is being used.
          </h4>
        </div>
        <div className="col-span-5 md:col-span-3 flex flex-col gap-4">
          <iframe
            className="w-full min-h-72"
            src="https://www.youtube.com/embed/KId6eunoiWk?start=45&end=50&frameborder=0&controls=0&loop=1"
            title="LiSA - Crossing Field"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <span className="text-xl text-center">夢で ____ 飛んだ</span>
        </div>

        <div className="col-span-5 md:col-span-2 grid xl:grid-cols-2 gap-4">
          {options.map((option: string) => (
            <HeroOption value={option} />
          ))}
        </div>
      </div>
    </main>
  );
}
