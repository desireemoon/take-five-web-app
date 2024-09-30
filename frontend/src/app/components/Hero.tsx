import Link from "next/link";

const Hero = () => (
  // TODO: Incorperate the images created by chatGPT
  <section className="bg-gradient-to-r from-green-400 to-green-500 text-white text-center py-16 px-6 md:py-20 md:px-12">
    <h1 className="text-4xl md:text-5xl font-bold">
      Discover the Power of a Five-Minute Break
    </h1>
    <p className="mt-4 text-base md:text-lg">
      Personalized daily activities designed to fit into your busy schedule.
      Take five minutes for yourself today!
    </p>
    <Link
      href="/signUp"
      className="mt-8 inline-block bg-yellow-400 text-white px-6 py-3 rounded-lg hover:bg-yellow-500"
    >
      Get Started
    </Link>
  </section>
);

export default Hero;
