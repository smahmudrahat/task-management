import frame from "./assets/frame.png";

export default function HeroSection() {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px] bg-[#1e1e1e] text-white">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* TEXT LEFT SIDE */}
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px] text-center md:text-left">
              Tasker
            </h1>
            <p className="text-lg my-2 opacity-80 text-center md:text-left">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>

          {/* IMAGE RIGHT SIDE */}
          <div className="flex justify-center md:justify-end">
            <img
              className="w-[326px] h-[290px] object-contain"
              src={frame}
              alt="frame"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
