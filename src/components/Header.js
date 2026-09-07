import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { toggleLanguage, text } = useLanguage();

  return (
    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-6">
        <img
          className="w-44 shrink-0 mix-blend-multiply"
          src="/images/Watchgpt-logo.png"
          alt="WatchGPT Logo"
        />
        <div className="flex gap-3 whitespace-nowrap">
          <button
            className="rounded bg-white px-3 py-2 text-sm font-semibold text-black"
            onClick={toggleLanguage}
          >
            {text.language}
          </button>
          <button className="rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white">
            {text.signIn}
          </button>
        </div>
    </div>
  )
}

export default Header