function Footer({ darkMode }) {
  return (
    <footer
      id="contact"
      className={`
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-black text-white"
            : "bg-[#dce8d8] text-black"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Top Divider */}
        <div
          className={`
            w-full
            border-t
            mb-20
            ${
              darkMode
                ? "border-white/10"
                : "border-black/20"
            }
          `}
        />

        {/* Footer Columns */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-14
          "
        >
          {/* Company */}
          <div>
            <h3 className="text-2xl mb-8 font-light">
              Company
            </h3>

            <ul
              className={`
                space-y-6
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-700"
                }
              `}
            >
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="text-2xl mb-8 font-light">
              Terms & Policies
            </h3>

            <ul
              className={`
                space-y-6
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-700"
                }
              `}
            >
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-2xl mb-8 font-light">
              Follow Us
            </h3>

            <ul
              className={`
                space-y-6
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-700"
                }
              `}
            >
              <li className="cursor-pointer hover:text-[#ff6b6b] transition-all">
                Instagram
              </li>

              <li className="cursor-pointer hover:text-[#ff6b6b] transition-all">
                LinkedIn
              </li>

              <li className="cursor-pointer hover:text-[#ff6b6b] transition-all">
                Youtube
              </li>

              <li className="cursor-pointer hover:text-[#ff6b6b] transition-all">
                Twitter
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl mb-8 font-light">
              Contact
            </h3>

            <ul
              className={`
                space-y-6
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-700"
                }
              `}
            >
              <li>
                1498w Fluton ste, STE
                <br />
                2D Chicago, IL 63867.
              </li>

              <li>(123) 456789000</li>

              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-28 text-center">
          <p
            className={
              darkMode
                ? "text-gray-500"
                : "text-gray-700"
            }
          >
            ©2023 Elementum. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;