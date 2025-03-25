import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
export default function Banner() {
  return (
    <div className="max-w-[900px] mx-auto mt-12 min-h-[calc(100vh-185px)] flex pt-28">
      <section>
        <h1 className="text-6xl font-light mt-4 tracking-widest">Hi,</h1>
        <h1 className="text-6xl font-light mt-2 tracking-widest">
          I'm Nahid Hasan, a
        </h1>
        <p className="mt-4 tracking-widest text-2xl text-[#6B6B6B]">
          Front-End Web Developer
        </p>
        <p className="mt-4 tracking-widest font-light">
          Your friendly neighborhood frontend developer, UX architect, and
          JavaScript engineer. I spend my days (and often nights) painting the
          Internet canvas with Projects and lines of code, turning zeroes and
          ones into immersive, interactive experiences, Bona fide photochromic
          Lens enthusiast - sunlight or indoors, I've got it covered. I tread
          the path of minimalism, finding beauty in simplicity and order. When
          I'm not crafting beautiful web experiences, you can find me reading
        </p>
        <div className="flex gap-6 mt-6 text-[#6B6B6B]">
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin size={16} />
          </a>
          <a href="https://github.com" target="_blank">
            <FaGithub size={16} />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FaFacebook size={16} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter size={16} />
          </a>
          <a href="https://wa.me/your_number" target="_blank">
            <FaWhatsapp size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
