function Newsletter({ darkMode }) {
  return (
    <section
      className={`
        relative
        pt-40
        pb-32
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-3
        hover:scale-[1.01]
        ${darkMode ? "bg-[#181818]" : "bg-[#dce8d8]"}
      `}
    >
      {/* Glow */}
      {darkMode && (
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            bg-pink-500/10
            rounded-full
            blur-[150px]
          "
        />
      )}

      {/* Left Arrow */}
      <div className="hidden lg:block absolute left-20 top-0">
        <svg width="240" height="130">
          <path
            className="draw-line"
            d="M10 10 C40 90 150 95 210 60"
            stroke="#ff6b6b"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M198 48 L210 60 L192 65"
            stroke="#ff6b6b"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Right Arrow */}
      <div className="hidden lg:block absolute right-20 top-0">
        <svg width="240" height="130">
          <path
            className="draw-line"
            d="M230 10 C200 90 90 95 30 60"
            stroke="#ff6b6b"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M42 48 L30 60 L48 65"
            stroke="#ff6b6b"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        <h2
          className={`
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-light
            leading-[0.95]
            ${darkMode ? "text-white" : "text-black"}
          `}
        >
          Subscribe to
          <br />

          our{" "}

          <span
            className={`
              px-5
              py-1
              rounded-full
              ${
                darkMode
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-yellow-100"
              }
            `}
          >
            newsletter
          </span>
        </h2>

        <p
          className={`
            mt-8
            text-base
            md:text-lg
            max-w-2xl
            mx-auto
            leading-relaxed
            ${darkMode ? "text-gray-400" : "text-gray-600"}
          `}
        >
          Get the latest insights on innovation,
          design trends, and business growth
          delivered directly to your inbox.
        </p>

        <button
          className="
            mt-10
            bg-black
            text-white
            px-10
            py-4
            rounded-full
            transition-all
            duration-500
            hover:scale-110
            hover:-translate-y-1
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]
          "
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

export default Newsletter;