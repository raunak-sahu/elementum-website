import { motion } from "framer-motion";
import team1 from "../assets/images/team1.jpg";
import ZigzagUnderline from "./ZigzagUnderline";

function About() {
  return (
    <motion.section
      id="studio"
      className="
        relative
        max-w-[1400px]
        mx-auto
        px-10
        lg:px-16
       py-20 md:py-28 lg:py-36
        overflow-hidden

        transition-all
        duration-500

        hover:-translate-y-2
        hover:scale-[1.01]
        hover:shadow-2xl
      "
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Pink Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-pink-200
          rounded-full
          blur-[140px]
          opacity-30
        "
      />
      {/* Mobile Decorations */}
<div className="absolute top-20 right-6 w-10 h-10 bg-pink-200 rounded-full md:hidden" />

<div className="absolute bottom-20 left-6 w-12 h-12 bg-purple-500 rounded-tl-[40px] md:hidden" />

      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2
    className="
  text-[42px]
  sm:text-[58px]
  md:text-[80px]
  lg:text-[110px]
  xl:text-[120px]
  leading-[0.95]
  font-[300]
  tracking-[-0.04em]
"
          >
<div className="relative inline-block">
  Tomorrow

  <div
    className="
      hidden
      lg:block
      absolute
      left-0
      top-full
      mt-3
    "
  >
    <ZigzagUnderline width="220" />
  </div>
</div>
            <br />

            should

            <br />

            be better than{" "}

<span className="bg-[#dce8d8] px-4 py-1 rounded-full -ml-4">
  today
</span>
          </h2>

          <p className="mt-10 text-gray-600 max-w-lg text-lg leading-relaxed">
            We help organisations transform, innovate and move
            forward through thoughtful strategy, creative
            problem-solving and modern digital experiences.
          </p>

          <button
            className="
              mt-8
              flex
              items-center
              gap-3
              transition-all
              duration-300
              hover:gap-5
              hover:text-[#ff6b6b]
            "
          >
            Read more
            <span>→</span>
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Purple Shape */}
          <div
            className="
              absolute
              -left-12
              top-24
              w-40
              h-40
              bg-purple-500
              rounded-tl-[120px]
              z-0

              transition-all
              duration-500
              hover:rotate-12
            "
          />

          {/* Red Shape */}
         <div
  className="
    absolute
    right-0
    top-12
    w-32
    h-32
    bg-[#ff6b6b]
    rotate-12
    rotate-slow
  "
/>

<motion.img
  src={team1}
  alt=""
  whileHover={{
    scale: 1.05,
    rotate: 2,
  }}
  transition={{
    duration: 0.4,
  }}
  className="
    relative
    z-10
    w-[520px]
    h-[520px]
    rounded-full
    object-cover
    shadow-xl
  "
/>
     

        </div>

      </div>
    </motion.section>
  );
}

export default About;