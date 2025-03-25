"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <nav ref={navRef} className="max-w-[1440px] mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl">
          N.  H A S A N
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-gray-700 text-sm tracking-widest">
          <Link href="/">HOME</Link>
          <Link href="#">PAGES</Link>
          <Link href="#">BLOGS</Link>
          <Link href="#">SHOP</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
