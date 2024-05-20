import Image from 'next/image';
const AboutUs = () => (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-600">At Take Five, we believe that even the busiest schedules can accommodate moments of joy and relaxation. Our app provides you with quick, fun, and personalized activities every day, helping you make the most of your five-minute breaks.</p>
        <Image src="/images/placeholder.jpg" alt="Quick Activity"  width={600} height={400} className="mt-8 mx-auto rounded-lg shadow-lg" />
        {/* <Image src="/images/quick-activity.jpg" alt="Quick Activity" className="mt-8 mx-auto rounded-lg shadow-lg w-full md:w-1/2" /> */}

      </div>
    </section>
  );
  
  export default AboutUs;
  