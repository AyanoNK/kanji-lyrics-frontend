import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-col-reverse sm:flex-row items-between justify-between gap-4 sm:gap-0 w-full border border-black p-6">
      <div className="flex sm:flex-row items-center gap-4">
        <Image
          className="hidden sm:block"
          src="/ai-logo.webp"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <form className="relative w-full">
          <input
            className="w-full overflow-hidden whitespace-nowrap"
            placeholder="検索を入力"
          />
          <button type="submit" className="absolute right-0 top-0 px-2">
            検索
          </button>
        </form>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Image
            className="sm:hidden"
            src="/ai-logo.webp"
            alt="Logomini"
            width={30}
            height={30}
            priority
          />
          <span className="sm:hidden">鬼門</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <a href="#">ログイン</a>
          <a href="#">新規会員登録</a>
        </div>
      </div>
    </header>
  );
}
