const Footer = () => (
  <footer className="bg-gray-800 py-6">
    <div className="container mx-auto px-6 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Take Five. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-yellow-400">
          Facebook
        </a>
        <a href="#" className="hover:text-yellow-400">
          Twitter
        </a>
        <a href="#" className="hover:text-yellow-400">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
