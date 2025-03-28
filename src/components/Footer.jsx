import React from "react";

function Footer() {
  return (
    <footer className="footer bg-base-300 text-gray-300 p-4 flex flex-col md:flex-row justify-between items-center shadow-md ">
      {/* Left Section - Logo & Copyright */}
      <div className="flex items-center gap-3">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current text-gray-400"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.165c-3.338.726-4.042-1.416-4.042-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.835 2.805 1.305 3.49.997.107-.776.418-1.305.76-1.605-2.666-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.527.116-3.184 0 0 1.008-.322 3.3 1.23a11.486 11.486 0 0 1 3-.405c1.017.004 2.04.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.657.24 2.881.117 3.184.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.48 5.92.43.37.812 1.104.812 2.22v3.293c0 .32.192.694.8.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
        </svg>
        <p className="text-sm">Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>

      {/* Right Section - Social Icons */}
      <nav className="flex items-center gap-6 mt-3 md:mt-0">
        {/* GitHub */}
        <a
          href="https://github.com/rajeshn67"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.165c-3.338.726-4.042-1.416-4.042-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.835 2.805 1.305 3.49.997.107-.776.418-1.305.76-1.605-2.666-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.527.116-3.184 0 0 1.008-.322 3.3 1.23a11.486 11.486 0 0 1 3-.405c1.017.004 2.04.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.653 1.657.24 2.881.117 3.184.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.48 5.92.43.37.812 1.104.812 2.22v3.293c0 .32.192.694.8.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rajesh-narwade-243bb42b2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M20.452 20.452h-3.991v-5.996c0-1.43-.027-3.271-1.992-3.271-1.994 0-2.3 1.553-2.3 3.16v6.107h-3.986V9h3.827v1.561h.054c.533-.969 1.835-1.992 3.779-1.992 4.04 0 4.787 2.656 4.787 6.107v5.776zM5.337 7.433a2.3 2.3 0 1 1 0-4.598 2.3 2.3 0 0 1 0 4.598zM7.078 20.452H3.593V9h3.485v11.452zM22.225 0H1.771C.791 0 0 .783 0 1.748v20.505C0 23.216.791 24 1.771 24h20.453c.98 0 1.776-.784 1.776-1.747V1.748C24 .783 23.205 0 22.225 0z"></path>
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/rajeshhhh._.20" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 24 24"
    fill="url(#instagramGradient)"
    className="fill-current"
  >
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#feda75", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#fa7e1e", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#d62976", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9c-1.93 0-3.5-1.57-3.5-3.5v-9C4 5.57 5.57 4 7.5 4zm9 2.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path>
  </svg>
</a>

      </nav>
    </footer>
  );
}

export default Footer;
