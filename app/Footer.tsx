export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-between justify-around w-full border border-black p-6 text-sm">
        <div className="flex flex-col gap-4">
          <a href="#">鬼門</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy</a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#">Want to contribute?</a>
          <a href="#">Contact Us</a>
          <a href="https://www.ayano.software/" target="_blank">
            Made by Ayano
          </a>
        </div>
      </div>
    </footer>
  );
}
