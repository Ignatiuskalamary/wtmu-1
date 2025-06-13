import React from "react";

interface HeaderBannerProps {
  backgroundImage: string;
  logoImage: string;
  title: string;
  height?: string; // Optional custom height
  logoSize?: string; // Optional custom logo size
  titleSize?: string; // Optional custom title size
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({
  backgroundImage,
  logoImage,
  title,
  height = "h-38", // Default height (9.5rem)
  logoSize = "w-24 h-24", // Default logo size
  titleSize = "text-5xl", // Default title size
}) => {
  return (
    <div className={`relative w-full ${height}`}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Website header"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center  px-8 py-4 bg-black/20">
        <img
          src={logoImage}
          alt="Company Logo"
          className={`${logoSize} object-contain`}
        />
        <h1
          className={`text-white ${titleSize} font-bold drop-shadow-md text-right ml-4`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeaderBanner;
