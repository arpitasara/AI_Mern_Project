import React from "react";
import { AnimatePresence, motion } from "motion/react";

function LoginModel({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-3 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent p-[1px]"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
              <motion.div
                animate={{ opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -left-32 -top-32 h-80 w-80 bg-purple-500/30 blur-[140px]"
              />

              <motion.div
                animate={{ opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-32 -right-32 h-80 w-80 bg-blue-500/25 blur-[140px]"
              />

              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 z-20 text-lg text-zinc-400 transition hover:text-white"
              >
                ×
              </button>

              <div className="relative px-8 pb-10 pt-14 text-center">
                <h1 className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
                  Ai powered website builder
                </h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoginModel;
