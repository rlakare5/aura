import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 w-full px-4 md:px-6 lg:px-8 xl:px-12 pt-4 md:pt-6 lg:pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-lobster text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-30 relative"
          >
            Fruite
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          >
            <div className="text-white font-roboto text-lg xl:text-xl font-bold bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
              Home
            </div>
            <a
              href="#shop"
              className="text-white font-roboto text-lg xl:text-xl font-bold hover:text-pink-200 transition-colors duration-300"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="text-white font-roboto text-lg xl:text-xl font-bold hover:text-pink-200 transition-colors duration-300"
            >
              Contact
            </a>
          </motion.nav>

          {/* Choose Your Favourite Drink - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center space-x-2 lg:space-x-3"
          >
            <span className="text-white font-roboto text-sm lg:text-lg xl:text-xl font-bold hidden xl:block">
              Choose Your Favourite Drink
            </span>
            <span className="text-white font-roboto text-sm lg:text-base font-bold xl:hidden">
              Choose Drink
            </span>

            {/* Glass icon */}
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white"
              viewBox="0 0 30 30"
              fill="currentColor"
            >
              <path d="M11.875 3.75C9.45 3.75 7.3125 5.3 6.5375 7.6C4.2 8.05 2.5 10.1125 2.5 12.5C2.5 15.2625 4.7375 17.5 7.5 17.5V27.5H21.25V25H25C25.6875 25 26.25 24.4375 26.25 23.75V13.75C26.25 13.0625 25.6875 12.5 25 12.5H22.5V10C22.5 7.2375 20.2625 5 17.5 5H15.4C14.375 4.1875 13.1625 3.75 11.875 3.75ZM11.875 6.25C12.8625 6.25 13.7875 6.7125 14.375 7.5H17.5C18.8875 7.5 20 8.625 20 10H15C12.5 10 11.65 11.4125 10.625 13.2875C9.6 15.1625 7.5 15 7.5 15C6.1125 15 5 13.8875 5 12.5C5 11.125 6.1125 10 7.5 10H8.75V9.375C8.75 7.65 10.15 6.25 11.875 6.25ZM21.25 15H23.75V22.5H21.25V15Z" />
            </svg>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-30 w-8 h-8 flex flex-col justify-center items-center space-y-1"
          >
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 6 : 0,
              }}
              className="w-6 h-0.5 bg-white transition-all duration-300"
            />
            <motion.div
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-white transition-all duration-300"
            />
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -6 : 0,
              }}
              className="w-6 h-0.5 bg-white transition-all duration-300"
            />
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mt-4"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="text-white font-roboto text-lg font-bold bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
              Home
            </div>
            <a
              href="#shop"
              className="text-white font-roboto text-lg font-bold hover:text-pink-200 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#contact"
              className="text-white font-roboto text-lg font-bold hover:text-pink-200 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>

            {/* Mobile Choose Drink */}
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-white/20">
              <span className="text-white font-roboto text-sm font-bold">
                Choose Drink
              </span>
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M11.875 3.75C9.45 3.75 7.3125 5.3 6.5375 7.6C4.2 8.05 2.5 10.1125 2.5 12.5C2.5 15.2625 4.7375 17.5 7.5 17.5V27.5H21.25V25H25C25.6875 25 26.25 24.4375 26.25 23.75V13.75C26.25 13.0625 25.6875 12.5 25 12.5H22.5V10C22.5 7.2375 20.2625 5 17.5 5H15.4C14.375 4.1875 13.1625 3.75 11.875 3.75ZM11.875 6.25C12.8625 6.25 13.7875 6.7125 14.375 7.5H17.5C18.8875 7.5 20 8.625 20 10H15C12.5 10 11.65 11.4125 10.625 13.2875C9.6 15.1625 7.5 15 7.5 15C6.1125 15 5 13.8875 5 12.5C5 11.125 6.1125 10 7.5 10H8.75V9.375C8.75 7.65 10.15 6.25 11.875 6.25ZM21.25 15H23.75V22.5H21.25V15Z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Tablet Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:flex lg:hidden items-center justify-center space-x-8 mt-6"
        >
          <div className="text-white font-roboto text-base font-bold bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
            Home
          </div>
          <a
            href="#shop"
            className="text-white font-roboto text-base font-bold hover:text-pink-200 transition-colors duration-300"
          >
            Shop
          </a>
          <a
            href="#contact"
            className="text-white font-roboto text-base font-bold hover:text-pink-200 transition-colors duration-300"
          >
            Contact
          </a>
        </motion.nav>
      </div>
    </header>
  );
};
