'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { InfiniteSlider } from './ui/infiniteSlider'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TestoCard({
  className,
  start = true,
  pauseOnHover = true
}) {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      rate: "⭐⭐⭐⭐⭐",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      rate: "⭐⭐⭐⭐",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      rate: "⭐⭐⭐⭐",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      rate: "⭐⭐⭐⭐⭐",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      rate: "⭐⭐⭐",
    },
  ]

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden bg-black py-24",
        className
      )}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Trusted by 1000+ people</h1>
  <InfiniteSlider  durationOnHover={75} gap={24}>
        {testimonials.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--gray-800), var(--gray-900))",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <p className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal mb-1">
                {item.rate}
              </p>
              <br />
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </InfiniteSlider>
    </div>
  )
}