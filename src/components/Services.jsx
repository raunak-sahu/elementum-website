import ZigzagUnderline from "./ZigzagUnderline";

const services = [
  {
    title: "Collaborative & partnership",
    desc: "Office of multiple interest content",
  },
  {
    title: "We talk about our weight",
    desc: "The hanger US Air force digital experimental",
  },
  {
    title: "Piloting digital confidence",
    desc: "Delta faucet content, social, digital",
  },
];

function Services() {
  return (
<section
  id="services"
  className="
    max-w-7xl
    mx-auto

    px-6
    sm:px-8
    lg:px-10

    py-20
    md:py-28
    lg:py-40

    mt-10
    md:mt-16
    lg:mt-24
  "
>
      {/* HEADING */}
<div className="mb-24 pl-6 md:pl-10 lg:pl-12">
        <h2
          className="
       text-[42px]
sm:text-5xl
md:text-7xl
lg:text-[90px]
            leading-[0.9]
            font-light
            tracking-[-0.05em]
          "
        >
          What we

          <span className="bg-green-100 px-4 rounded-full ml-3">
            can
          </span>

          <br />

          offer you!
        </h2>

        <div className="mt-4">
          <ZigzagUnderline width="240" />
        </div>
      </div>

      {/* SERVICES */}
     <div className="w-full pl-6 md:pl-10 lg:pl-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="
  group
  grid
  md:grid-cols-[220px_1fr_80px]
  items-center
  py-10
  border-b
  border-black/10

  transition-all
  duration-500

  hover:translate-x-4
  hover:bg-white
  hover:shadow-xl
  hover:px-6
  hover:rounded-2xl
"
          >
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.desc}
            </p>

            <h3
              className="
                text-3xl
                md:text-[52px]
                font-light
                tracking-[-0.04em]
                transition-all
                duration-500
                group-hover:text-[#ff6b6b]
              "
            >
              {service.title}
            </h3>

            <span
              className="
                text-4xl
                transition-all
                duration-500
                group-hover:translate-x-3
              "
            >
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;