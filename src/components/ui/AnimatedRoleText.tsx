"use client";

import { useState, useEffect, useCallback } from "react";

const ROLES = [
  { text: "Software Engineering Student", className: "text-text-primary" },
  { text: "Full Stack Developer", className: "text-gradient-primary" },
  { text: "AI Developer", className: "" },
  { text: "Digital Marketer", className: "" }
];

const TYPING_SPEED = 80; // ms per character
const DELETING_SPEED = 50; // ms per character
const PAUSE_AFTER_TYPING = 2000; // ms to pause when full text is shown
const PAUSE_AFTER_DELETING = 500; // ms to pause after fully deleted

export default function AnimatedRoleText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentRole = ROLES[roleIndex];

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentRole.text.length) {
        setDisplayText(currentRole.text.slice(0, displayText.length + 1));
      } else {
        // Finished typing — pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPING);
        return;
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentRole.text.slice(0, displayText.length - 1));
      } else {
        // Finished deleting — pause then move to next role
        setIsPaused(true);
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTimeout(() => {
          setIsPaused(false);
        }, PAUSE_AFTER_DELETING);
        return;
      }
    }
  }, [displayText, isDeleting, isPaused, currentRole.text]);

  useEffect(() => {
    const timer = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, handleTyping]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-2xl md:text-3xl lg:text-4xl text-text-secondary">
      <span className={currentRole.className}>
        {displayText}
        <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-current animate-pulse align-middle" />
      </span>
    </div>
  );
}

