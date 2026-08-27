"use client";

import React, { useState, useEffect, useRef } from "react";
import { SpeakerHigh } from "@phosphor-icons/react";

export default function AudioNarrationPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-collapse 'Listen' label after 5 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlayPause = () => {
    // Collapse label on first interaction
    if (showLabel) {
      setShowLabel(false);
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio playback interrupted or failed:", err);
          setIsPlaying(false);
        });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlayPause();
    }
  };

  return (
    <>
      {/* Native HTML5 Audio element - no autoplay, persists across section navigation & scroll */}
      <audio
        ref={audioRef}
        src="/audio/intro-narration.mp3"
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
      />

      <div
        className="fixed z-50 no-print pointer-events-auto"
        style={{
          bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
          right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
        }}
      >
        {/* Subtle Ambient Pulse Ring when audio is playing */}
        {isPlaying && (
          <span
            className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping pointer-events-none"
            aria-hidden="true"
            style={{ animationDuration: "2.5s" }}
          />
        )}

        <button
          type="button"
          onClick={togglePlayPause}
          onKeyDown={handleKeyDown}
          aria-label={
            isPlaying
              ? "Pause Ben Sam's audio narration"
              : "Listen to Ben Sam's audio narration"
          }
          aria-pressed={isPlaying}
          title={isPlaying ? "Pause narration" : "Listen to audio narration"}
          className={`group relative flex items-center justify-center gap-2.5 h-12 md:h-14 rounded-full border text-white font-medium text-sm select-none cursor-pointer outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:scale-105 active:scale-95 ${
            showLabel
              ? "px-4 md:px-5 w-auto"
              : "w-12 md:w-14 px-0"
          } ${
            isPlaying
              ? "bg-zinc-950/95 border-emerald-400/60 shadow-[0_0_25px_rgba(52,211,153,0.35),0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              : "bg-zinc-900/90 border-white/20 hover:border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          }`}
        >
          {/* Circular Progress Ring border accent */}
          {isPlaying && (
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none rounded-full"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-emerald-400/30"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="289"
                strokeDashoffset={289 - (289 * progress) / 100}
                strokeLinecap="round"
                className="text-emerald-400 transition-all duration-200"
              />
            </svg>
          )}

          {/* Sound / Waveform Icon Container */}
          <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0">
            {isPlaying ? (
              // Active Waveform Equalizer Animation Bars
              <div
                className="flex items-center justify-center gap-[2.5px] h-4 w-4"
                aria-hidden="true"
              >
                <span className="w-[2.5px] bg-emerald-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3.5" />
                <span
                  className="w-[2.5px] bg-emerald-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-4"
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className="w-[2.5px] bg-emerald-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-2.5"
                  style={{ animationDelay: "0.4s" }}
                />
                <span
                  className="w-[2.5px] bg-emerald-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-3.5"
                  style={{ animationDelay: "0.15s" }}
                />
              </div>
            ) : (
              // Phosphor Icon: SpeakerHigh
              <SpeakerHigh
                size={22}
                weight="bold"
                className="text-white/90 group-hover:text-emerald-400 transition-colors"
                aria-hidden="true"
              />
            )}
          </div>

          {/* Smooth Collapsible "Listen" Label */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
              showLabel
                ? "max-w-[120px] opacity-100 translate-x-0"
                : "max-w-0 opacity-0 -translate-x-2"
            }`}
          >
            <span
              className="whitespace-nowrap font-semibold text-xs tracking-wider uppercase pr-0.5 text-white/90 group-hover:text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {isPlaying ? "Playing" : "Listen"}
            </span>
          </div>

          {/* Screen reader only status announcement */}
          <span className="sr-only">
            {isPlaying ? "Audio narration is playing" : "Audio narration is paused"}
          </span>
        </button>
      </div>
    </>
  );
}
