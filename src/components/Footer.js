import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { toggleLanguage, text } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black px-4 pb-12 pt-8 text-sm text-white/60 sm:px-6 md:px-12">
      <div className="mx-auto max-w-7xl ">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/images/Watchgpt-logo.png" alt="WatchGPT Logo" />
          </div>
          <div>
            <p className="mb-8">
              {text.footerQuestion} <a className="footer-link" href="tel:0008009191743">000-800-919-1743</a>
              <span className="mx-2 text-white/30">|</span>
              <a className="footer-link" href="mailto:support@watchgpt.com">support@watchgpt.com</a>
            </p>
            <nav className="footer-links" aria-label="Footer navigation">
              {text.footerLinks.map((link) => (
                <button className="footer-link text-left" type="button" key={link}>{link}</button>
              ))}
            </nav>
            <button type="button" className="footer-language" onClick={toggleLanguage}>
              {text.language} <span aria-hidden="true">⌄</span>
            </button>
            <p className="mt-8">{text.country}</p>
            <p className="mt-8 text-xs text-white/40">{text.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
