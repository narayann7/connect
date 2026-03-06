import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MobileSubtitleVariant } from "../db/bio";

interface MobileSubtitleProps {
  subtitle: string;
  variant: MobileSubtitleVariant;
}

function parseRoles(subtitle: string): string[] {
  return subtitle.split("|").map((s) => s.trim());
}

const Cursor = () => (
  <span className="inline-block w-[2px] h-[1em] bg-white/70 ml-[1px] animate-pulse" />
);

// ─── Variant A: Classic typewriter — type → pause → erase → next ──────────────
function TypewriterSubtitle({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, roles]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-base text-white/80 h-7 flex items-center justify-center"
    >
      {displayed}
      <Cursor />
    </motion.p>
  );
}

// ─── Variant B: Fade typewriter — type → pause → whole text fades out → next ──
function TypewriterFadeSubtitle({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [visible, setVisible] = useState(true);

  const current = roles[roleIndex];

  useEffect(() => {
    if (!visible) return;
    let timeout: ReturnType<typeof setTimeout>;

    if (displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else {
      // Fully typed — pause, then fade out
      timeout = setTimeout(() => setVisible(false), 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayed, visible, current]);

  // After fade-out completes, advance to next role
  const handleFadeComplete = () => {
    if (!visible) {
      setDisplayed("");
      setRoleIndex((i) => (i + 1) % roles.length);
      setVisible(true);
    }
  };

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -6 }}
      transition={{ duration: visible ? 0.3 : 0.5 }}
      onAnimationComplete={handleFadeComplete}
      className="text-base text-white/80 h-7 flex items-center justify-center"
    >
      {displayed}
      {visible && <Cursor />}
    </motion.p>
  );
}

// ─── Variant C: Glitch typewriter — each char scrambles before settling ────────
const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*!?";
const randomChar = () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];

function TypewriterGlitchSubtitle({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  // Array where each slot is either null (empty), a scramble char, or the settled char
  const [chars, setChars] = useState<(string | null)[]>([]);
  const [settledCount, setSettledCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "clearing">("typing");

  const current = roles[roleIndex];

  // Reset when role changes
  useEffect(() => {
    setChars([]);
    setSettledCount(0);
    setPhase("typing");
  }, [roleIndex, current]);

  // Typing phase: scramble then settle each character
  useEffect(() => {
    if (phase !== "typing") return;
    if (settledCount >= current.length) {
      const t = setTimeout(() => setPhase("clearing"), 2000);
      return () => clearTimeout(t);
    }

    // Skip scrambling for spaces — settle immediately
    if (current[settledCount] === " ") {
      setChars((prev) => {
        const next = [...prev];
        next[settledCount] = " ";
        return next;
      });
      setSettledCount((n) => n + 1);
      return;
    }

    let scrambleCount = 0;
    const maxScrambles = 6;

    const scramble = () => {
      setChars((prev) => {
        const next = [...prev];
        next[settledCount] = randomChar();
        return next;
      });
      scrambleCount++;
      if (scrambleCount < maxScrambles) {
        scrambleTimer = setTimeout(scramble, 40);
      } else {
        // Settle on the real character
        setChars((prev) => {
          const next = [...prev];
          next[settledCount] = current[settledCount];
          return next;
        });
        setSettledCount((n) => n + 1);
      }
    };

    let scrambleTimer = setTimeout(scramble, settledCount === 0 ? 0 : 60);
    return () => clearTimeout(scrambleTimer);
  }, [phase, settledCount, current]);

  // Clearing phase: erase characters from right to left quickly
  useEffect(() => {
    if (phase !== "clearing") return;
    if (chars.length === 0) {
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const t = setTimeout(() => {
      setChars((prev) => prev.slice(0, -1));
    }, 30);
    return () => clearTimeout(t);
  }, [phase, chars, roles.length]);

  const displayed = chars.map((c) => c ?? "").join("");
  const isScrambling = phase === "typing" && settledCount < current.length;

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-base text-white/80 h-7 flex items-center justify-center font-mono tracking-wide"
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          className={
            i < settledCount
              ? "text-white/80"
              : "text-white/40"
          }
        >
          {ch === " " ? "\u00a0" : (ch ?? "")}
        </span>
      ))}
      {isScrambling || phase === "clearing" ? null : <Cursor />}
    </motion.p>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
const MobileSubtitle: React.FC<MobileSubtitleProps> = ({ subtitle, variant }) => {
  const roles = parseRoles(subtitle);

  return (
    <AnimatePresence mode="wait">
      {variant === "typewriter" && <TypewriterSubtitle key="typewriter" roles={roles} />}
      {variant === "typewriter-fade" && <TypewriterFadeSubtitle key="typewriter-fade" roles={roles} />}
      {variant === "typewriter-glitch" && <TypewriterGlitchSubtitle key="typewriter-glitch" roles={roles} />}
    </AnimatePresence>
  );
};

export default MobileSubtitle;
