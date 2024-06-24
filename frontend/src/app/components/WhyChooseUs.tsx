import Image from "next/image";

const WhyChooseUs = () => (
  <section className="bg-white py-12 md:py-16 px-6 md:px-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Why Choose Take Five?
      </h2>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 px-4 py-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/icons/personalized.svg"
              alt="Personalized for You"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Personalized for You</h3>
            <p className="text-gray-600 mt-2">
              Activities based on your interests and preferences.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 py-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/icons/quick-easy.svg"
              alt="Quick and Easy"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Quick and Easy</h3>
            <p className="text-gray-600 mt-2">
              Each activity takes just five minutes.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 py-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/icons/minimal-supplies.svg"
              alt="Minimal Supplies Needed"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Minimal Supplies Needed</h3>
            <p className="text-gray-600 mt-2">
              Designed to be simple and accessible.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 py-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/icons/well-being.svg"
              alt="Boost Your Well-being"
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Boost Your Well-being</h3>
            <p className="text-gray-600 mt-2">
              Improve your day, one activity at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
