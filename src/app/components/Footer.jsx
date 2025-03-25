import React from "react";
const Footer = () => {
  return (
    <footer className="tracking-widest font-light px-4 md:px-12 lg:px-24 mt-10 m-4 relative">
      <p className="text-center text-[10px] md:text-xs">
        Copyright © {new Date().getFullYear()} - All rights reserved by Nahid
        Hasan
      </p>
    </footer>
  );
};

export default Footer;
