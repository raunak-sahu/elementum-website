import team2 from "../assets/images/team2.jpg";
import ZigzagUnderline from "./ZigzagUnderline";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";

function Testimonials() {
  return (
<section
  className="
    relative
    max-w-7xl
    mx-auto
    px-6
    py-40
    overflow-hidden
    transition-all
    duration-500
    hover:-translate-y-3
    hover:scale-[1.01]
  "
>


      {/* Purple Shape */}
      <div className="absolute left-0 top-24 w-24 h-24 bg-purple-500 rounded-bl-full"></div>

      {/* Pink Shape */}
      <div className="absolute right-12 top-40 w-20 h-20 bg-pink-200 rounded-full"></div>

      {/* Heading */}
   <h2 className="text-center text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">

  <span className="bg-green-100 px-4 py-1 rounded-full">
    What
  </span>{" "}

  our customer
  <br />
says

<span className="relative inline-block ml-3">
  about us

  <div className="absolute left-0 top-full">
    <ZigzagUnderline width="180" />
  </div>
</span>

</h2>
      {/* Yellow Stroke */}
      <div className="flex justify-center mt-6">
        <div className="w-48 h-1 bg-yellow-400 rounded-full rotate-[-3deg]"></div>
      </div>

      {/* Main Layout */}
      <div className="relative mt-24 max-w-6xl mx-auto h-[560px]">

        {/* LEFT IMAGES */}

        <img
          src={image1}
          alt=""
          className="
            absolute
            left-0
            top-0
            w-24
            h-24
            rounded-full
            object-cover
            shadow-xl
            z-30
            transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl
          "
        />

        <img
          src={image2}
          alt=""
          className="
            absolute
            left-16
            top-28
            w-44
            h-44
            rounded-full
            object-cover
            shadow-xl
            z-30
            transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl
          "
        />

        <img
          src={image3}
          alt=""
          className="
            absolute
            left-0
            bottom-20
            w-32
            h-32
            rounded-full
            object-cover
            shadow-xl
            z-30
            transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl
          "
        />

        <img
          src={image4}
          alt=""
          className="
            absolute
            left-40
            bottom-0
            w-20
            h-20
            rounded-full
            object-cover
            shadow-xl
            z-30transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl

          "
        />

        {/* RIGHT IMAGES */}

        <img
          src={image5}
          alt=""
          className="
            absolute
            right-0
            top-0
            w-24
            h-24
            rounded-full
            object-cover
            shadow-xl
            z-30
            transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl
          "
        />

        <img
          src={image6}
          alt=""
          className="
            absolute
            right-16
            top-24
            w-44
            h-44
            rounded-full
            object-cover
            shadow-xl
            z-30
            transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl
          "
        />

        <img
          src={image7}
          alt=""
          className="
            absolute
            right-0
            bottom-20
            w-32
            h-32
            rounded-full
            object-cover
            shadow-xl
            z-30
            transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl
          "
        />

        <img
          src={image8}
          alt=""
          className="
            absolute
            right-40
            bottom-0
            w-20
            h-20
            rounded-full
            object-cover
            shadow-xl
            z-30
            transition-all
duration-500
hover:scale-110
hover:-translate-y-3
hover:shadow-2xl
          "
        />

        {/* TESTIMONIAL CARD */}

        <div
          className="
            relative
            z-20
            bg-white
            rounded-[40px]
            shadow-xl
            max-w-xl
            mx-auto
            px-10
            py-12
            text-center
            top-20
          "
        >

          <img
            src={team2}
            alt=""
            className="
              w-20
              h-20
              rounded-full
              object-cover
              mx-auto
              mb-6
            "
          />

          <p className="text-gray-600 leading-relaxed text-base">
            Working with Elementum completely transformed
            our online presence. Their strategic approach,
            attention to detail, and commitment to results
            exceeded our expectations. The team delivered
            exceptional value while maintaining clear
            communication throughout the project.
          </p>

          <div className="mt-8">
            <h4 className="font-semibold text-lg">
              Priya Sharma
            </h4>

            <p className="text-gray-400 text-sm">
              Founder, Elevate Digital
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;