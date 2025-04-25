export default function Footer() {
  return (
    <footer className="bg-black text-white md:text-xl text-xs ">
      <div className="w-full m-0 p-4">
        <div className="flex flex-row text-center">
          <div className="basis-1/3">
            <b>Desarrollador:</b>
            <p>Alberto Carrizo</p>
          </div>
          <div className="basis-1/3">
            <b>Necesitas una Página Web?</b>
            <p>wottan@live.com.ar</p>
          </div>
          <div className="basis-1/3 flex flex-row justify-center items-center md:space-x-4 space-x-0">
            <a
              href="https://www.instagram.com/umami.veg/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/instagram.png"
                alt="logo"
                width={48}
                className="mx-auto md:scale-100 scale-75"
              />
            </a>
            <p>Instagram de UmamiVeg</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
