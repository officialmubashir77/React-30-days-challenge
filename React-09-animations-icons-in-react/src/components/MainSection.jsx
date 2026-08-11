import React from "react";
import { BadgeCheck, MoveRight } from "lucide-react";

const MainSection = () => {
  const cards = [
    {
      id: 1,
      title: "Responsive Design",
      description:
        "Create beautiful layouts that work perfectly on mobile, tablet and desktop screens.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Tailwind CSS",
      description:
        "Build modern user interfaces quickly using utility-first Tailwind CSS classes.",
      buttonText: "Explore",
    },
    {
      id: 3,
      title: "React Components",
      description:
        "Create reusable and maintainable components for your React applications.",
      buttonText: "View Details",
    },
    {
      id: 4,
      title: "Modern UI",
      description:
        "Design clean and professional interfaces with modern styling techniques.",
      buttonText: "Discover",
    },
    {
      id: 5,
      title: "Fast Development",
      description:
        "Develop interfaces faster by combining React components with Tailwind CSS.",
      buttonText: "Get Started",
    },
    {
      id: 6,
      title: "Easy Customization",
      description:
        "Customize colors, spacing, typography and layouts directly using utility classes.",
      buttonText: "Customize",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden overflow-y-hidden bg-slate-900 text-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span
            className="animate__animated animate__fadeInUp flex items-center gap-2 w-fit mx-auto rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-400 shadow-sm shadow-blue-500/10"
            style={{
              animationDuration: "500ms",
            }}
          >
            <BadgeCheck />
            Our Features
          </span>

          <h1
            className="animate__animated animate__fadeInUp mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{
              animationDelay: "120ms",
              animationDuration: "550ms",
            }}
          >
            Build Better With
            <span className="text-blue-500"> React & Tailwind</span>
          </h1>

          <p
            className="animate__animated animate__fadeInUp mt-4 text-base leading-7 text-slate-400 sm:text-lg"
            style={{
              animationDelay: "240ms",
              animationDuration: "550ms",
            }}
          >
            Explore some useful features and learn how responsive layouts
            work using React and Tailwind CSS.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="animate__animated animate__fadeInUp group flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              style={{
                animationDelay: `${320 + index * 120}ms`,
                animationDuration: "600ms",
              }}
            >
              {/* Card Number */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-600/10 text-lg font-bold text-blue-500 transition duration-300 group-hover:scale-105 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                {card.id}
              </div>

              {/* Card Title */}
              <h2 className="text-xl font-bold text-white transition duration-300 group-hover:text-blue-400">
                {card.title}
              </h2>

              {/* Card Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                {card.description}
              </p>

              {/* Card Button */}
              <button className="flex items-center gap-2 mt-6 w-fit cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/10 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-95">
                {card.buttonText}
                <MoveRight />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainSection;