import StringUtils from "../utils/string_utils";

interface AboutMeProps {
  title: string;
  subtitle?: string;
  description: string;
  linkUrl?: string;
  logoUrl?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
  title,
  subtitle,
  description,
  logoUrl,
  linkUrl,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6">
      {/* Logo (optional) */}
      {logoUrl && (
        <img
          src={logoUrl}
          alt={`${title} logo`}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover mb-3 sm:mb-4 shadow-lg ring-2 ring-white/10"
        />
      )}

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1 sm:mb-2">
        <span>{title}</span>
      </h1>

      {/* Link */}
      {linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-disabled hover:underline mb-2 sm:mb-3 transition-colors"
        >
          {StringUtils.parseUrlToDomain(linkUrl)}
        </a>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-white/80">
          {subtitle}
        </p>
      )}

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700 max-w-sm sm:max-w-md md:max-w-xl leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutMe;
