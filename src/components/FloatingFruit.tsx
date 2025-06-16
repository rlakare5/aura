import { motion } from "framer-motion";
import { useState } from "react";

interface FloatingFruitProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  animationDelay?: number;
  rotation?: number;
  fruitType?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16",
  md: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
  lg: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40",
};

const getFallbackColor = (fruitType?: string) => {
  switch (fruitType?.toLowerCase()) {
    case "strawberry":
      return "from-red-400 to-pink-500";
    case "orange":
      return "from-orange-400 to-orange-600";
    case "mudapple":
    case "apple":
      return "from-red-500 to-red-700";
    case "cranberry":
      return "from-red-400 to-red-600";
    default:
      return "from-pink-400 to-red-500";
  }
};

export const FloatingFruit = ({
  src,
  alt,
  className = "",
  size = "md",
  animationDelay = 0,
  rotation = 0,
  fruitType = "strawberry",
}: FloatingFruitProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const fallbackGradient = getFallbackColor(fruitType);

  if (imageError) {
    return (
      <motion.div
        className={`absolute ${sizeClasses[size]} ${className}`}
        initial={{
          opacity: 0,
          scale: 0,
          rotate: rotation,
        }}
        animate={{
          opacity: 0.8,
          scale: 1,
          y: [0, -15, 0],
          rotate: [rotation, rotation + 3, rotation],
        }}
        transition={{
          opacity: { duration: 0.8, delay: animationDelay },
          scale: { duration: 0.8, delay: animationDelay },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: animationDelay,
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: animationDelay,
          },
        }}
      >
        <div
          className={`w-full h-full rounded-full bg-gradient-to-br ${fallbackGradient} shadow-lg`}
          style={{
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${className}`}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: rotation,
      }}
      animate={{
        opacity: imageLoaded ? 1 : 0.8,
        scale: 1,
        y: [0, -15, 0],
        rotate: [rotation, rotation + 3, rotation],
      }}
      transition={{
        opacity: { duration: 0.8, delay: animationDelay },
        scale: { duration: 0.8, delay: animationDelay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: animationDelay,
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: animationDelay,
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      {!imageLoaded && (
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${fallbackGradient} animate-pulse`}
          style={{
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
          borderRadius: "50%",
          background: "transparent",
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
    </motion.div>
  );
};
