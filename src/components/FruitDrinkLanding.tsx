import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { FruitSlider, Fruit } from "./FruitSlider";
import { FloatingFruit } from "./FloatingFruit";

export const FruitDrinkLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFruit, setCurrentFruit] = useState<Fruit | null>(null);

  useEffect(() => {
    // Simulate component mounting and initial load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleFruitChange = (fruit: Fruit) => {
    setCurrentFruit(fruit);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #D5D4D4 0%, rgba(237, 15, 82, 0.91) 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center"
        >
          <div className="text-white font-lobster text-4xl md:text-6xl mb-4">
            Fruite
          </div>
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-hidden relative"
    >
      {/* Dynamic radial gradient background */}
      <AnimatePresence mode="wait">
        {currentFruit && (
          <motion.div
            key={currentFruit.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              background: `radial-gradient(50% 50% at 50% 50%, #D5D4D4 0%, ${currentFruit.backgroundColor} 100%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Fallback background for initial load */}
      {!currentFruit && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #D5D4D4 0%, rgba(237, 15, 82, 0.91) 100%)",
          }}
        />
      )}

      {/* Enhanced background elements for depth with color transitions */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {currentFruit && (
            <motion.div
              key={`bg-${currentFruit.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: `linear-gradient(135deg, ${currentFruit.backgroundColor}20 0%, transparent 50%)`,
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-full h-full"
                style={{
                  background: `linear-gradient(315deg, ${currentFruit.backgroundColor}30 0%, transparent 50%)`,
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
                style={{
                  background: `radial-gradient(circle, ${currentFruit.backgroundColor}10 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Header */}
      <Header />

      {/* Main content area */}
      <main className="relative z-10 flex-1 pt-4 md:pt-8 lg:pt-16 pb-16">
        {/* Fruit Slider */}
        <div className="relative h-[70vh] md:h-[75vh] lg:h-[80vh]">
          <FruitSlider onFruitChange={handleFruitChange} />
        </div>

        {/* Dynamic floating fruit decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence mode="wait">
            {currentFruit && (
              <motion.div
                key={currentFruit.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Top fruits with enhanced animations */}
                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="top-20 left-2 md:top-24 md:left-8 lg:top-28 lg:left-12"
                  size="sm"
                  animationDelay={0.5}
                  rotation={15}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="top-16 right-2 md:top-20 md:right-8 lg:top-24 lg:right-12"
                  size="md"
                  animationDelay={1.0}
                  rotation={-20}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                {/* Side fruits */}
                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="top-1/2 left-1 md:left-4 lg:left-8 transform -translate-y-1/2"
                  size="sm"
                  animationDelay={1.5}
                  rotation={45}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="top-1/2 right-1 md:right-4 lg:right-8 transform -translate-y-1/2"
                  size="sm"
                  animationDelay={2.0}
                  rotation={-10}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                {/* Bot tom fruits */}
                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="bottom-20 left-2 md:bottom-24 md:left-8 lg:bottom-28 lg:left-12"
                  size="sm"
                  animationDelay={2.5}
                  rotation={30}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="bottom-32 left-12 md:bottom-40 md:left-20 lg:bottom-48 lg:left-24"
                  size="sm"
                  animationDelay={3.0}
                  rotation={-45}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="bottom-24 right-2 md:bottom-28 md:right-8 lg:bottom-32 lg:right-12"
                  size="md"
                  animationDelay={3.5}
                  rotation={60}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                <FloatingFruit
                  src={currentFruit.fruitImage}
                  alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                  className="bottom-40 right-12 md:bottom-48 md:right-20 lg:bottom-56 lg:right-24"
                  size="sm"
                  animationDelay={4.0}
                  rotation={-30}
                  fruitType={currentFruit.name.toLowerCase()}
                />

                {/* Additional decorative fruits - hidden on very small screens */}
                <div className="hidden sm:block">
                  <FloatingFruit
                    src={currentFruit.fruitImage}
                    alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                    className="top-1/3 left-1/4 transform -translate-x-1/2"
                    size="sm"
                    animationDelay={4.5}
                    rotation={90}
                    fruitType={currentFruit.name.toLowerCase()}
                  />

                  <FloatingFruit
                    src={currentFruit.fruitImage}
                    alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                    className="top-2/3 right-1/4 transform translate-x-1/2"
                    size="sm"
                    animationDelay={5.0}
                    rotation={-60}
                    fruitType={currentFruit.name.toLowerCase()}
                  />

                  {/* Extra decorative fruits for larger screens */}
                  <div className="hidden lg:block">
                    <FloatingFruit
                      src={currentFruit.fruitImage}
                      alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                      className="top-1/4 left-1/2 transform -translate-x-1/2"
                      size="lg"
                      animationDelay={5.5}
                      rotation={120}
                      fruitType={currentFruit.name.toLowerCase()}
                    />

                    <FloatingFruit
                      src={currentFruit.fruitImage}
                      alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                      className="bottom-1/4 left-1/3 transform -translate-x-1/2"
                      size="md"
                      animationDelay={6.0}
                      rotation={-120}
                      fruitType={currentFruit.name.toLowerCase()}
                    />

                    <FloatingFruit
                      src={currentFruit.fruitImage}
                      alt={`Fresh ${currentFruit.name.toLowerCase()}`}
                      className="top-3/4 right-1/3 transform translate-x-1/2"
                      size="sm"
                      animationDelay={6.5}
                      rotation={75}
                      fruitType={currentFruit.name.toLowerCase()}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Enhanced light effects with dynamic colors */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          {currentFruit && (
            <motion.div
              key={`lights-${currentFruit.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{
                  opacity: [0.1, 0.25, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/3 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full blur-xl"
                style={{
                  backgroundColor: currentFruit.backgroundColor + "20",
                }}
              />

              <motion.div
                animate={{
                  opacity: [0.05, 0.2, 0.05],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/3 right-1/4 w-16 h-16 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-full blur-xl"
                style={{
                  backgroundColor: currentFruit.backgroundColor + "30",
                }}
              />

              <motion.div
                animate={{
                  opacity: [0.03, 0.15, 0.03],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 right-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full blur-2xl"
                style={{
                  backgroundColor: currentFruit.backgroundColor + "15",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced fruit name indicator with color transition */}
      {currentFruit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-6 z-20 text-white/70 text-sm font-roboto bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
        >
          <span className="flex items-center space-x-2">
            <span>Current:</span>
            <span className="font-bold">{currentFruit.name}</span>
            <div
              className="w-3 h-3 rounded-full border border-white/30"
              style={{ backgroundColor: currentFruit.backgroundColor }}
            />
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};
