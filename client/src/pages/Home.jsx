import { useState } from "react";
import { motion } from "motion/react";
import LoginModel from "../components/loginModels.jsx";

function Home() {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className='relative min-h-screen overflow-hidden bg-[#040404] text-white'>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold">GenWeb.ai</div>
          <div className="flex items-center gap-5">
            <div className="hidden cursor-pointer text-sm text-zinc-400 hover:text-white md:inline">
              Pricing
            </div>
            <button
              type="button"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
              onClick={() => setOpenLogin(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.div>

      <section className="px-6 pb-32 pt-44 text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold tracking-tight md:text-7xl"
        >
          Build Your Website <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            with AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400"
        >
          Start your project and continue from the login window.
        </motion.p>
        <button
          type="button"
          onClick={() => setOpenLogin(true)}
          className="mt-10 rounded-xl bg-white px-10 py-4 font-semibold text-black transition-transform hover:scale-105"
        >
          Get Started
        </button>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} GenWeb.ai. All rights reserved.
      </footer>

      {openLogin && (
        <LoginModel open={openLogin} onClose={() => setOpenLogin(false)} />
      )}
    </div>
  );
}

export default Home;
