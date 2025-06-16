import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Fruit {
  name: string;
  color: string;
  bgImage: string;
  fruitImage: string;
  backgroundColor: string;
  bottleImage: string;
}

const fruits: Fruit[] = [
  {
    name: "STRAWBERRY",
    color: "#FF00B7",
    bgImage:
      "https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/10150447/pexels-photo-10150447.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "rgba(237, 15, 82, 0.91)",
    bottleImage: "./images/2.png" // Strawberry bottle image
  },
  {
    name: "ORANGE",
    color: "#FF7809",
    bgImage:
      "https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/17840024/pexels-photo-17840024.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#FF5900",
    bottleImage: "./images/1.png" // Orange bottle image
  },
  {
    name: "MUDAPPLE",
    color: "#8A3C3C",
    bgImage:
      "https://images.pexels.com/photos/8970749/pexels-photo-8970749.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#592407",
    bottleImage: "./images/4.png" // Mudapple bottle image
  },
  {
    name: "CRANBERRY",
    color: "#EC8484",
    bgImage:
      "https://images.pexels.com/photos/9092660/pexels-photo-9092660.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/24743545/pexels-photo-24743545.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#CC3112",
    bottleImage: "./images/1.png" // Cranberry bottle image
  },
  {
    name: "APPLE",
    color: "#00FFBB",
    bgImage:
      "https://images.pexels.com/photos/8970749/pexels-photo-8970749.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#00FFF2",
    bottleImage: "./images/5.png" // Apple bottle image
  },
];

interface FruitSliderProps {
  onFruitChange?: (fruit: Fruit) => void;
}

export const FruitSlider = ({ onFruitChange }: FruitSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setIsFlipping(true);
        const newIndex = (prev + 1) % fruits.length;
        if (onFruitChange) {
          setTimeout(() => onFruitChange(fruits[newIndex]), 300);
        }
        setTimeout(() => setIsFlipping(false), 800);
        return newIndex;
      });
    }, 4000);

    // Call onFruitChange immediately for the initial fruit
    if (onFruitChange) {
      onFruitChange(fruits[currentIndex]);
    }

    return () => clearInterval(interval);
  }, [isClient, onFruitChange, currentIndex]);

  const handleFruitClick = (index: number) => {
    if (index === currentIndex) return;

    setIsFlipping(true);
    setCurrentIndex(index);
    if (onFruitChange) {
      setTimeout(() => onFruitChange(fruits[index]), 300);
    }
    setTimeout(() => setIsFlipping(false), 800);
  };

  if (!isClient) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative z-10">
          <div className="relative w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-[30rem]">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 md:w-32 md:h-8 lg:w-40 lg:h-10 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(15, 14, 14, 0.8) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-pink-500">
              <div className="absolute top-0 left-1/4 w-6 md:w-8 h-full bg-gradient-to-r from-white/30 to-transparent rounded-l-2xl" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white font-roboto font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none tracking-wider opacity-90">
            STRAWBERRY
          </div>
        </div>
      </div>
    );
  }

  const currentFruit = fruits[currentIndex];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central beverage bottle with enhanced animations */}
      <div className="relative z-10">
        <motion.div
          animate={{
            rotateY: isFlipping ? [0, 180, 360] : 0,
            scale: isFlipping ? [1, 1.1, 1] : 1,
            y: isFlipping ? [0, -30, 0] : 0,
          }}
          transition={{
            duration: isFlipping ? 0.8 : 0,
            ease: "easeInOut",
          }}
          className="relative w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 lg:w-80 lg:h-[30rem] xl:w-96 xl:h-[36rem]"
        >
          {/* Enhanced bottle shadow with animation */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:w-40 lg:h-10 xl:w-48 xl:h-12 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(15, 14, 14, 0.8) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />

          {/* Bottle container */}
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: 90,
                  rotateX: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: -90,
                  rotateX: -15,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Bottle image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={currentFruit.bottleImage}
                    alt={`${currentFruit.name} bottle`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Large fruit name text with enhanced animations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              y: 150,
              scale: 0.3,
              filter: "blur(20px)",
              rotateX: 90,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -150,
              scale: 0.3,
              filter: "blur(20px)",
              rotateX: -90,
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-white font-roboto font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] leading-none tracking-wider text-center px-4"
            style={{
              textShadow:
                "4px 4px 12px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.1)",
              WebkitTextStroke: "1px rgba(255,255,255,0.1)",
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "4px 4px 12px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.1)",
                  "6px 6px 16px rgba(0,0,0,0.5), 3px 3px 6px rgba(0,0,0,0.7), 0 0 30px rgba(255,255,255,0.2)",
                  "4px 4px 12px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {currentFruit.name}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced flavor indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {fruits.map((fruit, index) => (
          <motion.button
            key={index}
            onClick={() => handleFruitClick(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            style={{
              backgroundColor:
                index === currentIndex ? "white" : fruit.color + "80",
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: index === currentIndex ? [1, 1.2, 1] : 1,
            }}
            transition={{
              scale: {
                duration: 0.6,
                repeat: index === currentIndex ? Infinity : 0,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { fruits };