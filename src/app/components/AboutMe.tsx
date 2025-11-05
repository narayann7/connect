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
    <div className="flex flex-col items-center text-center ">
      {/* Logo (optional) */}
      {logoUrl && (
        <img
          src={logoUrl}
          alt={`${title} logo`}
          className="w-[160px] h-[160px] rounded-full object-cover mb-2"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-semibold">
        <span>{title}</span>
      </h1>
      {/* Link */}
      {linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-disabled hover:underline"
        >
          {StringUtils.parseUrlToDomain(linkUrl)}
        </a>
      )}

      {/* Subtitle */}
      {subtitle && <p>{subtitle}</p>}

      {/* Description */}
      <p className="text-base text-gray-700 max-w-xl">{description}</p>
    </div>
  );
};

export default AboutMe;
