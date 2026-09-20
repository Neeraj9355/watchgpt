import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { text } = useLanguage();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6">
        <img
          className="absolute inset-0 h-full w-full object-cover object-[50%_18%] opacity-40 sm:object-center"
          src="/images/background-image-logo.png"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(127,29,29,0.2),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.5),#050505_92%)]" />

        <section className="relative z-10 w-full max-w-[28rem]" aria-labelledby="auth-title">
          <form className="rounded bg-black/75 px-6 py-10 shadow-2xl shadow-black/50 sm:px-16 sm:py-14" onSubmit={(event) => event.preventDefault()}>
            <h1 id="auth-title" className="text-3xl font-bold tracking-tight text-white">
              {isSignUp ? text.signUp : text.signIn}
            </h1>

            <div className="mt-7 space-y-4">
              {isSignUp && <div>
                <label className="sr-only" htmlFor="name">text.fullName</label>
                <input
                  className="w-full rounded border border-transparent bg-[#333] px-4 py-4 text-sm text-white outline-none transition placeholder:text-[#b3b3b3] focus:border-white focus:bg-[#454545]"
                  id="name"
                  name="name"
                  type="text"
                  placeholder={text.fullName}
                  autoComplete="name"
                  required
                />
              </div>}
              <div>
                <label className="sr-only" htmlFor="email">Email address</label>
                <input
                  className="w-full rounded border border-transparent bg-[#333] px-4 py-4 text-sm text-white outline-none transition placeholder:text-[#b3b3b3] focus:border-white focus:bg-[#454545]"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">Password</label>
                <input
                  className="w-full rounded border border-transparent bg-[#333] px-4 py-4 text-sm text-white outline-none transition placeholder:text-[#b3b3b3] focus:border-white focus:bg-[#454545]"
                  id="password"
                  name="password"
                  type="password"
                  placeholder={isSignUp ? text.createPassword : text.enterPassword}
                  autoComplete={isSignUp ? text.newPassword : text.currentPassword}
                  required
                />
              </div>
              {isSignUp && <div>
                <label className="sr-only" htmlFor="confirm-password">Confirm password</label>
                <input
                  className="w-full rounded border border-transparent bg-[#333] px-4 py-4 text-sm text-white outline-none transition placeholder:text-[#b3b3b3] focus:border-white focus:bg-[#454545]"
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder={text.confirmPassword}
                  autoComplete={text.newPassword}
                  required
                />
              </div>}
            </div>

            <button className="mt-6 w-full rounded bg-[#e50914] px-4 py-3 text-base font-bold text-white transition hover:bg-[#f6121d] focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-black" type="submit">
              {isSignUp ? text.signUp : text.signIn}
            </button>

            <p className="mt-8 text-base text-[#737373]">
              {isSignUp ? text.alreadyHaveAccount : text.newToWatchGPT}{" "}
              <button
                className="text-white transition hover:underline"
                type="button"
                onClick={() => setIsSignUp((currentMode) => !currentMode)}
              >
                {isSignUp ? text.signIn : text.signUp}
              </button>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login