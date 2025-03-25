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
        <p className="mt-4 text-base tracking-widest font-light leading-6">
          A passionate frontend developer with a love for clean UI, smooth user
          experiences, and well-structured code. Currently exploring backend
          development to become a full-stack developer. With a background in
          Physics. <br />
        </p>
        <p className="mt-1.5 text-base tracking-widest font-light leading-6">
          I enjoy problem-solving and logical thinking, which I apply to web
          development. Always eager to learn new technologies and improve my
          skills. When I'm not coding, you can find me experimenting with ITX
          builds or exploring the depths of physics.
        </p>
        <div className="flex gap-8 mt-6 text-[#6B6B6B]">
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
