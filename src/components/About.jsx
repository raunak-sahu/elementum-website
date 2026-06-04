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
        py-40
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

      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2
            className="
              text-[60px]
              md:text-[85px]
              lg:text-[110px]
              leading-[0.9]
              font-light
              tracking-[-0.05em]
            "
          >
            <span className="relative inline-block">
              Tomorrow

              <div className="absolute left-0 top-full mt-2">
                <ZigzagUnderline width="220" />
              </div>
            </span>

            <br />

            should

            <br />

            be better than{" "}

            <span className="bg-[#dce8d8] px-6 rounded-full">
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