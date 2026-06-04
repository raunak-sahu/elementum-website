import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-[#111111]/90 backdrop-blur-md border-b border-white/10"
            : "bg-[#f6f6f4]/90 backdrop-blur-md border-b border-black/5"
        }
      `}
    >
      <nav className="max-w-[1400px] mx-auto px-6 py-5">

        <div className="grid grid-cols-3 items-center">

          {/* Logo */}
          <div>
            <a
              href="#home"
              className={`
                text-2xl
                font-semibold
                tracking-tight
                transition-all
                duration-300
                hover:opacity-80
                ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }
              `}
            >
              Elementum
            </a>
          </div>

          {/* Center Navigation */}
          <ul
            className="
              hidden
              lg:flex
              justify-center
              items-center
              gap-12
              text-sm
              uppercase
              tracking-wider
            "
          >
            {[
              ["Home", "#home"],
              ["Studio", "#studio"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className={`
                    relative
                    transition-all
                    duration-300
                    hover:text-[#ff6b6b]
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-[#ff6b6b]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    ${
                      darkMode
                        ? "text-white"
                        : "text-black"
                    }
                  `}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex justify-end items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-lg
                ${
                  darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }
              `}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Figma Style Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`
                text-4xl
                leading-none
                font-light
                transition-all
                duration-300
                hover:scale-110
                ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }
              `}
            >
              =
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`
              lg:hidden
              mt-6
              rounded-3xl
              shadow-xl
              p-6
              transition-all
              duration-300
              ${
                darkMode
                  ? "bg-[#1b1b1b]"
                  : "bg-white"
              }
            `}
          >
            <ul className="flex flex-col gap-5 text-center">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#studio">Studio</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;