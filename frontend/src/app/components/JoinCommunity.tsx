const JoinCommunity = () => (
  <section className="bg-green-500 py-12 md:py-16 px-6 md:px-12 text-white text-center">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
      <p className="mt-4">
        Sign up now and start your journey towards a more balanced and joyful
        life. It only takes five minutes to make a change!
      </p>
      <form className="mt-8 flex flex-col md:flex-row justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="custom-input mb-4 md:mb-0 md:mr-4"
        />
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  </section>
);

export default JoinCommunity;
