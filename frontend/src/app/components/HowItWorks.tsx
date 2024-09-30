import Image from "next/image";

const HowItWorks = () => (
  <section className="bg-gray-100 py-12 md:py-16 px-6 md:px-12" id="HowItWorks">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        How It Works
      </h2>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 px-4 py-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/icons/signup.svg"
              alt="Sign Up"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Sign Up</h3>
            <p className="text-gray-600 mt-2">
              Create a free account and tell us about your preferences.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 py-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/icons/activities.svg"
              alt="Get Daily Activities"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Get Daily Activities</h3>
            <p className="text-gray-600 mt-2">
              Receive a new activity each day, tailored just for you.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 py-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/icons/enjoy.svg"
              alt="Enjoy & Repeat"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Enjoy & Repeat</h3>
            <p className="text-gray-600 mt-2">
              Take five minutes to complete your activity and feel the
              difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
