import Header from "./Header";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Header />
      <img
        className="absolute inset-0 -z-0 h-full w-full object-cover opacity-50 mix-blend-screen"
        src="/images/background-image-logo.png"
        alt="Background"
      />
    </main>
    )
}

export default Home