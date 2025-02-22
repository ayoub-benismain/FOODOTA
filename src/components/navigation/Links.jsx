import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

function Links({ isOpen }) {
  const [links] = useState(["top-restaurant", "popular", "foods", "services"]);

  return (
    <>
      {/* Desktop Links */}
      <ul className="lg:flex hidden">
        {links.map((link, index) => (
          <Link
            to={`/${link}`}
            key={index}
            className="text-black mx-5 uppercase cursor-pointer transition-all duration-500 hover:translate-x-2"
          >
            {link.replace("-", " ").toUpperCase()}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white w-full absolute top-20 left-0 p-5 z-[999] shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center">
              {links.map((link, index) => (
                <Link
                  to={`/${link}`}
                  key={index}
                  className="text-black my-4 uppercase cursor-pointer transition-all duration-500 hover:translate-x-2 w-full text-center"
                >
                  {link.replace("-", " ").toUpperCase()}
                </Link>
              ))}
            </ul>
            
            {/* Mobile-only Buttons */}
            <div className="flex flex-col items-center gap-4 mt-6 px-4">
              <Button 
                value="register" 
                className="w-full max-w-[200px] bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
              />
              <Button 
                value="login" 
                className="w-full max-w-[200px] bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition-colors"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Links;