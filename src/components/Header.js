import { useLanguage } from "../context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { toggleLanguage, text } = useLanguage();
  const navigate = useNavigate();

  return (
    <header className="absolute inset-x-0 top-0 z-50 flex w-full items-center justify-between px-3 pt-4 sm:px-6 sm:pt-6">
        <Link to="/" aria-label="WatchGPT home">
        <img
          className="w-28 shrink-0 mix-blend-multiply sm:w-44"
          src="/images/Watchgpt-logo.png"
          alt="WatchGPT Logo"
        />
        </Link>
        <div className="flex gap-2 whitespace-nowrap sm:gap-3">
          <button
            type="button"
            className="rounded bg-white px-2 py-1.5 text-xs font-semibold text-black sm:px-3 sm:py-2 sm:text-sm"
            onClick={toggleLanguage}
          >
            {text.language}
          </button>
          <button
            type="button"
            className="rounded bg-red-600 px-2 py-1.5 text-xs font-semibold text-white sm:px-3 sm:py-2 sm:text-sm"
            onClick={() => navigate("/login")}
          >
            {text.signIn}
          </button>
        </div>
    </header>
  )
}

export default Header