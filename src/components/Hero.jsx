import { motion } from "framer-motion";
import Avatar from "./Avatar";
import ZigzagUnderline from "./ZigzagUnderline";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        max-w-[1500px]
        mx-auto
        px-6
        pt-16
        pb-24
        text-center
        overflow-hidden
      "
    >
       {/* Mobile Decorations */}
  <div className="absolute top-10 right-6 w-10 h-10 bg-pink-200 rounded-full md:hidden" />

  <div className="absolute top-40 left-4 w-8 h-8 bg-yellow-300 rounded-full md:hidden" />

  <div className="absolute bottom-20 right-4 w-12 h-12 border-4 border-purple-500 rotate-12 md:hidden" />

  {/* Existing Scribble */}
  <div className="absolute left-0 top-52 hidden 2xl:block">
    
  </div>
      {/* Left Scribble */}
      <div className="absolute left-0 top-52 hidden 2xl:block">
        <svg width="80" height="220">
          <path
            className="draw-line"
            d="M40 0C-10 40 90 70 40 110C-10 150 90 180 40 220"
            stroke="#111"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M20 0C-30 40 70 70 20 110C-30 150 70 180 20 220"
            stroke="#ff6b6b"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>

      {/* Top Right Shape */}
      <div className="absolute right-16 top-36 hidden xl:block">
        <div className="relative w-24 h-24 rotate-12 border-[5px] border-slate-500">
          <div className="absolute bottom-0 right-0 w-14 h-14 bg-purple-500 rounded-tl-full"></div>
        </div>
      </div>

      {/* Hero Heading */}
      <div
        className="
          inline-block
          border
          border-black/20
          px-6
          md:px-12
          py-8
          md:py-10
          relative
        "
      >
        <div className="relative">
          {/* Pink highlight behind changing */}
          <div
            className="
              hidden lg:block
              absolute
              right-2
              top-[145px]
              w-56
              h-20
              bg-pink-200
              rounded-full
              opacity-80
              -z-10
            "
          />

          <motion.h1
            className="
              text-[38px]
              sm:text-[52px]
              md:text-[72px]
              lg:text-[120px]
              leading-[1]
lg:leading-[0.9]
              font-[300]
              tracking-[-0.04em]
            "
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
 The{" "}
<span className="relative inline-block">
  thinkers

  {/* Desktop Underline */}
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

  {/* Tablet Underline */}
  <div
    className="
      hidden
      md:block
      lg:hidden
      absolute
      left-0
      top-full
      mt-2
    "
  >
    <ZigzagUnderline width="150" />
  </div>
</span>{" "}
and
<br />
doers were{" "}
<span className="relative inline-flex items-center justify-center px-4">
  <span className="absolute inset-0 bg-pink-200 rounded-full scale-110" />
  <span className="relative z-10">
    changing
  </span>
</span>
<br />
the{" "}
<span className="bg-green-100 px-4 rounded-full">
  status
</span>{" "}
Quo with
          
          </motion.h1>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="
          mt-8
          text-gray-600
          max-w-2xl
          mx-auto
          text-base
          md:text-lg
          leading-relaxed
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We are a creative studio helping brands and
        businesses build meaningful digital experiences
        that inspire growth and innovation.
      </motion.p>

      {/* Mobile / Tablet Avatars */}
      <div className="lg:hidden mt-12">
        <div className="flex justify-center flex-wrap gap-4">
          <Avatar src={image1} className="w-14 h-14" />
          <Avatar src={image2} className="w-16 h-16" />
          <Avatar src={image3} className="w-14 h-14" />
          <Avatar src={image4} className="w-16 h-16" />
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-4">
          <Avatar src={image5} className="w-14 h-14" />
          <Avatar src={image6} className="w-16 h-16" />
          <Avatar src={image7} className="w-14 h-14" />
          <Avatar src={image8} className="w-16 h-16" />
        </div>
      </div>

      {/* Desktop Avatars */}
      <div className="relative hidden lg:block h-[520px] mt-12 max-w-[1400px] mx-auto">

        <Avatar
          src={image1}
          className="absolute left-[2%] top-[210px] w-32 h-32 z-10"
        />

        <Avatar
          src={image2}
          className="absolute left-[9%] top-[170px] w-32 h-32 z-20"
        />

        <Avatar
          src={image3}
          className="absolute left-[32%] top-[60px] w-40 h-40"
        />

        <Avatar
          src={image4}
          className="absolute left-[42%] top-[255px] w-36 h-36"
        />

        <Avatar
          src={image5}
          className="absolute left-[58%] top-[150px] w-36 h-36 z-10"
        />

        <Avatar
          src={image6}
          className="absolute left-[64%] top-[175px] w-36 h-36 z-20"
        />

        <Avatar
          src={image7}
          className="absolute left-[82%] top-[120px] w-32 h-32"
        />

        <Avatar
          src={image8}
          className="absolute right-0 top-[220px] w-32 h-32 z-10"
        />
      </div>
    </section>
  );
}

export default Hero;