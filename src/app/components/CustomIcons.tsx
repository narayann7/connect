// Custom Stack Overflow Icon
export const StackOverflowIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
  </svg>
);

export const TelegramIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: "translateY(4px)" }}
  >
    <path d="M9.991 14.783l-.395 4.163c.565 0 .81-.243 1.105-.535l2.652-2.523 5.497 4.016c1.007.555 1.722.263 1.986-.933l3.599-16.877.001-.001c.322-1.505-.543-2.095-1.524-1.733L1.41 9.453C-.053 10.04-.043 10.868 1.133 11.23l5.974 1.868L18.36 5.73c.546-.333 1.042-.15.635.213L9.991 14.783z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: "translateY(-3px)" }}
  >
    <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.28 8.02h4.44V24H.28V8.02zM8.71 8.02h4.26v2.18h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V24h-4.44v-7.72c0-1.84-.03-4.21-2.56-4.21-2.56 0-2.95 2-2.95 4.07V24H8.71V8.02z" />
  </svg>
);
