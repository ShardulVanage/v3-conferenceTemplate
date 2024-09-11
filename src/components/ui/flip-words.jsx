import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utlis"; // Adjust this import path as needed

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timeoutId = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(10px)",
          scale: 1.1,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-100 px-2",
          className
        )}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block "
          >
            <span class="absolute mx-auto py-4 flex  w-fit  text-white   box-content font-extrabold  text-center select-none">
             {letter}
            </span>
            <h1
             class="relative top-0 w-fit h-auto py-4 justify-center flex  font-extrabold t text-center select-auto">
              {letter}
            </h1>
            
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};