import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getPopularMovies } from "../services/movieApi";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const { text } = useLanguage();
  const movieRailRef = useRef(null);

  const scrollMovies = (direction) => {
    movieRailRef.current?.scrollBy({
      left: direction * 260,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const response = await getPopularMovies();
        const fetchedMovies = response.results
          .filter((movie) => movie.poster_path)
          .map((movie) => ({
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }));

        if (fetchedMovies.length > 0) {
          setPopularMovies(fetchedMovies);
        }
      } catch (error) {
        console.error("Failed to fetch popular movies", error);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-black text-white">
      <Header />
      <section className="relative h-[560px] overflow-hidden sm:h-[700px] lg:h-[100svh]" aria-label="WatchGPT home">
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_18%] opacity-50 mix-blend-screen sm:object-center"
          src="/images/background-image-logo.png"
          alt="Background"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />
        <div className="absolute inset-x-0 top-[35%] z-20 px-4 text-center sm:top-[30%] sm:px-6 md:px-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {text.heroTitle}
              <span className="mt-1 block text-red-500 sm:mt-2">{text.heroTitleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/80 sm:mt-8 sm:text-lg sm:leading-7">
              {text.membershipPrompt}
            </p>
            <form className="mx-auto mt-5 flex w-full max-w-2xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="membership-email">
                {text.email}
              </label>
              <input
                id="membership-email"
                type="email"
                placeholder={text.email}
                className="min-h-12 min-w-0 flex-1 rounded border border-white/40 bg-black/70 px-4 text-sm text-white outline-none placeholder:text-white/60 focus:border-white sm:min-h-14 sm:text-base"
                required
              />
              <button
                type="submit"
                className="min-h-12 rounded bg-red-600 px-5 text-sm font-bold text-white transition hover:bg-red-700 sm:min-h-14 sm:px-7 sm:text-base"
              >
                {text.getStarted} <span aria-hidden="true">›</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-black px-4 py-10 sm:px-6 sm:py-12 md:px-12" aria-labelledby="popular-movies-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
                {text.picks}
              </p>
              <h1 id="popular-movies-title" className="text-xl font-bold sm:text-2xl md:text-3xl">
                {text.popularMovies}
              </h1>
            </div>
            <span className="hidden text-sm text-white/60 sm:block">{text.scrollToExplore}</span>
          </div>
          <div className="movie-rail-wrap">
            <button
              type="button"
              className="movie-arrow movie-arrow--left"
              aria-label="Previous movies"
              onClick={() => scrollMovies(-1)}
            >
              ‹
            </button>
            <div className="movie-scroll flex gap-4 overflow-x-auto pb-4" ref={movieRailRef} role="list">
              {popularMovies.map((movie) => (
                <article className="movie-card group" key={movie.title} role="listitem">
                  <img className="movie-card__poster" src={movie.image} alt={movie.title} />
                  <div className="movie-card__overlay">
                    <h2 className="line-clamp-2 text-sm font-semibold">{movie.title}</h2>
                  </div>
                </article>
              ))}
            </div>
            <button
              type="button"
              className="movie-arrow movie-arrow--right"
              aria-label="Next movies"
              onClick={() => scrollMovies(1)}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 pb-14 pt-4 sm:px-6 md:px-12" aria-labelledby="reasons-title">
        <div className="mx-auto max-w-7xl">
          <h2 id="reasons-title" className="mb-5 text-2xl font-bold sm:text-3xl">
            {text.reasonsTitle}
          </h2>
          <div className="reasons-grid">
            {text.reasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <h3 className="max-w-xs text-xl font-bold leading-tight sm:text-2xl">{reason.title}</h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-white/70 sm:text-base">{reason.description}</p>
                <div className="reason-card__icon" aria-hidden="true">{reason.icon}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 pb-16 sm:px-6 md:px-12" aria-labelledby="faq-title">
        <div className="mx-auto max-w-7xl">
          <h2 id="faq-title" className="mb-5 text-2xl font-bold sm:text-3xl">
            {text.faqTitle}
          </h2>
          <div className="faq-list">
            {text.faq.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div className="faq-item" key={item.question}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className="faq-answer">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="footer-signup">
          <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">
              {text.email}
            </label>
            <input id="footer-email" type="email" placeholder={text.email} required />
            <button type="submit">
              {text.getStarted} <span aria-hidden="true">›</span>
            </button>
          </form>
        </div>
      <Footer />
    </main>
  );
};

export default Home;