import { motion } from "framer-motion";

type BlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

interface AnimatedBackgroundProps {
  /** Colors used in the gradient bands */
  colors?: string[];
  /** Wrapper opacity (0–1) */
  opacity?: number;
  /** Blur applied to the base layer in px */
  blur?: number;
  /** Gradient angle in degrees */
  angle?: number;
  /** Duration of the base layer animation in seconds */
  baseDuration?: number;
  /** Duration of the overlay layer animation in seconds */
  overlayDuration?: number;
  /** blend-mode of the overlay layer */
  overlayBlendMode?: BlendMode;
  /** Opacity of the scanline-style overlay bands (0–1) */
  overlayBandOpacity?: number;
  /** Show / hide the overlay layer */
  showOverlay?: boolean;
  /** Opacity of the edges (0 = fully transparent edges / strong vignette, 1 = no fade) */
  edgeOpacity?: number;
  /** Extra Tailwind / CSS class names for the wrapper */
  className?: string;
}

export default function AnimatedBackground({
  colors = ["#D1EEE4", "#6EB69D", "#469a7c", "#0f2927", "#0a1a19"],
  opacity = 0.4,
  blur = 80,
  angle = 100,
  baseDuration = 20,
  overlayDuration = 15,
  overlayBlendMode = "difference",
  overlayBandOpacity = 0.1,
  showOverlay = true,
  edgeOpacity = 0,
  className = "",
}: AnimatedBackgroundProps) {
  // Single-point stops 5% apart — same pattern as the original inline gradient.
  // Append color[0] and color[1] at the end so the repeating tile is seamless.
  const step = 5;
  const stops = [
    ...colors.map((color, i) => `${color} ${10 + i * step}%`),
    `${colors[0]} ${10 + colors.length * step}%`,
    ...(colors.length > 1
      ? [`${colors[1]} ${10 + (colors.length + 1) * step}%`]
      : []),
  ].join(", ");

  const baseGradient = `repeating-linear-gradient(${angle}deg, ${stops})`;

  // Scanline bands for the overlay use the first color
  const [firstColor] = colors;
  const r = parseInt(firstColor.slice(1, 3), 16);
  const g = parseInt(firstColor.slice(3, 5), 16);
  const b = parseInt(firstColor.slice(5, 7), 16);
  const bandColor = `rgba(${r}, ${g}, ${b}, ${overlayBandOpacity})`;

  const overlayGradient = `
    repeating-linear-gradient(${angle}deg,
      ${bandColor} 0%,
      ${bandColor} 7%,
      transparent 10%,
      transparent 12%,
      ${bandColor} 16%),
    ${baseGradient}
  `;

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${className}`}
      style={{
        opacity,
        maskImage: `radial-gradient(ellipse at center, black 0%, rgba(0,0,0,${edgeOpacity}) 100%)`,
        WebkitMaskImage: `radial-gradient(ellipse at center, black 0%, rgba(0,0,0,${edgeOpacity}) 100%)`,
      }}
      aria-hidden="true"
    >
      {/* Base blurred layer */}
      <motion.div
        className="absolute inset-[-100%]"
        style={{
          background: baseGradient,
          backgroundSize: "300% 100%",
          filter: `blur(${blur}px)`,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: baseDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Overlay scanline layer */}
      {showOverlay && (
        <motion.div
          className="absolute inset-[-10px]"
          style={{
            background: overlayGradient,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            mixBlendMode: overlayBlendMode,
          }}
          animate={{
            backgroundPosition: [
              "50% 50%, 50% 50%",
              "100% 50%, 150% 50%",
              "50% 50%, 50% 50%",
            ],
          }}
          transition={{
            duration: overlayDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}
