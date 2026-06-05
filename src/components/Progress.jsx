import team2 from "../assets/images/team2.jpg";

function Progress() {
  return (
 <section
  className="
    relative
    max-w-[1350px]
    mx-auto
    px-10
 py-20 md:py-32 lg:py-40
    overflow-hidden
    transition-all
    duration-500
    hover:-translate-y-3
    hover:scale-[1.01]
  "
>
      

      {/* Curved Arrow */}
     {/* Desktop Arrow */}
<svg
  className="
    hidden
    lg:block
    absolute
    left-[22%]
    top-[36%]
    z-10
  "
  width="700"
  height="260"
>
  {/* Mobile Arrow */}
<svg
  className="
    lg:hidden
    absolute
    right-0
    top-10
    z-0
    opacity-40
  "
  width="180"
  height="80"
>
  <path
    d="M0 40 C60 0 120 80 180 40"
    stroke="#ff6b6b"
    strokeWidth="2"
    fill="none"
  />
</svg>
<path
  className="draw-line"
  d="M0 140 C180 20 340 260 520 120"
  stroke="#ff6b6b"
  strokeWidth="3"
  fill="none"
/>

        <path
          d="M520 120 L500 105"
          stroke="#ff6b6b"
          strokeWidth="3"
        />

        <path
          d="M520 120 L500 135"
          stroke="#ff6b6b"
          strokeWidth="3"
        />
      </svg>
<div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-24 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">

          {/* Red Triangle */}
          <div
            className="
              absolute
              -left-6
              bottom-6
              w-0
              h-0
              border-l-[70px]
              border-r-[70px]
              border-b-[120px]
              border-l-transparent
              border-r-transparent
              border-b-[#ff6b6b]
              z-0
            "
          />

          <img
  src={team2}
  alt=""
  className="
    relative
    z-10
    w-[360px]
    h-[360px]
    rounded-full
    object-cover

    transition-all
    duration-700

    hover:scale-105
    hover:-translate-y-3
    hover:shadow-2xl
  "
/>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative max-w-[760px]">

          {/* Red Rotated Square */}
{/* Desktop Red Square */}
<div
  className="
    hidden
    md:block
    absolute
    right-0
    -top-10
    w-24
    h-24
    lg:w-32
    lg:h-32
    bg-[#ff6b6b]
    rotate-12
    rotate-slow
  "
/>

{/* Mobile Pink Circle */}
<div
  className="
    md:hidden
    absolute
    right-2
    top-0
    w-10
    h-10
    bg-pink-200
    rounded-full
  "
/>

          <h2
  className="
    text-[48px]
    sm:text-[62px]
    lg:text-[90px]
    leading-[1]
    lg:leading-[0.92]
    font-[300]
    tracking-[-0.05em]
    relative
    z-10
  "
>
            See how we can
            <br />

            help you{" "}

            <span className="relative inline-block">
              progress

              <svg
                className="absolute left-0 top-full"
                width="210"
                height="30"
                viewBox="0 0 210 30"
              >
                <path
                  d="M5 8 C50 0 140 16 205 6"
                  stroke="#F5C518"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M5 18 C70 10 150 26 200 16"
                  stroke="#F5C518"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  d="M10 28 C90 20 170 30 190 24"
                  stroke="#F5C518"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
<p className="mt-6 lg:mt-10 max-w-md text-gray-600 leading-relaxed">
            We add a layer of fearless insight and action that
            allows change makers to accelerate their progress
            in areas such as brand, design, digital, comms and
            social research.
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

      </div>

    </section>
  );
}

export default Progress;