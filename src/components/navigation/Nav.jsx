import React, { useState } from "react";
import Button from "./Button";
import logo from "/Users/youss/OneDrive/Desktop/Foodota/src/assets/logo.svg";
import Links from "./Links";
import Cart from "./Cart";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-screen h-20 lg:px-22 flex justify-between items-center z-50">
      <img src={logo} alt="logo" className="lg:h-20 h-18 mx-5 lg:mx-0" />
      <Links isOpen={isOpen} />
      <div className="flex items-center">
        <Cart itemCount={2} />
        
        {/* Desktop Buttons (hidden on mobile) */}
        <div className="hidden lg:flex">
          <Button value="register" className="lg:bg-white mx-3" />
          <Button value="login" className="lg:bg-white mx-3" />
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div
          className="lg:hidden text-3xl mx-3 cursor-pointer"
          onClick={toggleMenu}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <TfiClose className="text-black text-lg" />
          ) : (
            <CiMenuFries className="text-black text-xl" />
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Nav;