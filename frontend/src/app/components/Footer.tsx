const Footer = () => (
  <footer className="bg-gray-800 py-6">
    <div className="container mx-auto px-6 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Take Five. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="https://github.com/desireemoon/take-five-web-app"
          className="hover:text-yellow-400"
          target="_blank"
        >
         Check out the Github for this project!
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
